#!/usr/bin/env node
/*
 * Build script: regenerates index.html from templates/index.template.html + data/content.json.
 *
 * data/content.json is the editable source of truth for page content. Run this script
 * after changing it:
 *
 *   node tools/build.mjs
 *
 * The contact email and the CV (data/cv.json) are treated as sensitive: each gets AES-256-GCM
 * encrypted (fresh random key/IV each build) and embedded as ciphertext in the shipped
 * index.html. The email is decrypted client-side via the Web Crypto API on page load; the
 * CV only when its modal is opened, so crawlers never see CV text. Note this is obfuscation
 * against casual scraping, not real confidentiality — the decryption key ships in the
 * same page, since there is no server to keep it secret on a static site. Every other
 * field is public portfolio content and is baked into the HTML as plain, crawlable text.
 *
 * `node tools/build.mjs --cv-out=<file.html>` also writes the CV as a standalone page, for
 * printing to an ATS-friendly PDF.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { randomBytes, createCipheriv } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const contentPath = path.join(root, 'data', 'content.json');
const cvPath = path.join(root, 'data', 'cv.json');
const templatePath = path.join(root, 'templates', 'index.template.html');
const outPath = path.join(root, 'index.html');

const content = JSON.parse(readFileSync(contentPath, 'utf8'));
const cv = JSON.parse(readFileSync(cvPath, 'utf8'));
let html = readFileSync(templatePath, 'utf8');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function kv(label, value) {
  return `          <div><span class="k">${esc(label)}</span><span class="v">${esc(value)}</span></div>`;
}

/* ---------- HERO ---------- */
const hero = content.hero;
const heroFragment = [
  kv('nama', hero.name),
  kv('peran', hero.role),
  kv('lokasi', hero.location),
  kv('sistem live', hero.systemsLive),
  kv('startup', hero.startups),
  `          <p>${esc(hero.tagline)}</p>`,
].join('\n');
html = html.replace('          <!--BUILD:HERO-->', heroFragment);

/* ---------- FOCUS ---------- */
const focusFragment = content.focus
  .map((item, i) => {
    const n = String(i + 1).padStart(2, '0');
    const margin = i === 0 ? '' : ' style="margin-top:.5rem"';
    return `          <div${margin}>${n}. ${esc(item.title)} <span class="c">— ${esc(item.desc)}</span></div>`;
  })
  .join('\n');
html = html.replace('          <!--BUILD:FOCUS-->', focusFragment);

/* ---------- SKILLS ---------- */
const skillsFragment = Object.entries(content.skills)
  .map(([group, items]) => kv(group, items.join(', ')))
  .join('\n');
html = html.replace('          <!--BUILD:SKILLS-->', skillsFragment);

/* ---------- PERSONAL PROJECT ---------- */
function projFeature(p, indent) {
  const pad = ' '.repeat(indent);
  return [
    `${pad}<div class="proj-feature">`,
    `${pad}  <button class="thumb" type="button" data-lightbox="${esc(p.img)}" data-caption="${esc(p.alt)}">`,
    `${pad}    <img src="${esc(p.img)}" alt="${esc(p.alt)}" loading="lazy" width="1600" height="1000">`,
    `${pad}  </button>`,
    `${pad}  <div>`,
    `${pad}    <div><span class="k">${esc(p.roleLabel)}</span><span class="v">${esc(p.roleValue)}</span></div>`,
    `${pad}    <p>${esc(p.desc)}</p>`,
    `${pad}    <a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.urlLabel)} ↗</a>`,
    `${pad}  </div>`,
    `${pad}</div>`,
  ].join('\n');
}

const personal = content.personalProject;
const personalFragment = projFeature(
  { ...personal, roleLabel: 'peran', roleValue: personal.role },
  10
);
html = html.replace('          <!--BUILD:PERSONAL_PROJECT-->', personalFragment);

/* ---------- CORPORATE PROJECTS ---------- */
const corporateCards = content.corporateProjects
  .map((p) => projFeature({ ...p, roleLabel: 'klien', roleValue: p.client }, 12))
  .join('\n');
const corporateFragment = [
  '          <div class="proj-list">',
  corporateCards,
  '          </div>',
].join('\n');
html = html.replace('          <!--BUILD:CORPORATE_PROJECTS-->', corporateFragment);

/* ---------- CONTACT (email is the sensitive field) ---------- */
const contact = content.contact;
const contactFragment = [
  `          <p>${esc(contact.blurb)}</p>`,
  `          <div style="margin-top:.5rem"><span class="k">email</span><a href="#" id="emailLink" class="v" style="text-decoration:underline">memuat…</a></div>`,
  `          <div><span class="k">linkedin</span><a class="v" href="${esc(contact.linkedinUrl)}" target="_blank" rel="noopener" style="text-decoration:underline">${esc(contact.linkedinLabel)}</a></div>`,
  `          <div><span class="k">github</span><a class="v" href="${esc(contact.githubUrl)}" target="_blank" rel="noopener" style="text-decoration:underline">${esc(contact.githubLabel)}</a></div>`,
].join('\n');
html = html.replace('          <!--BUILD:CONTACT-->', contactFragment);

/* ---------- CV (rendered as semantic HTML, then encrypted) ---------- */
function li(text) {
  return `<li>${esc(text)}</li>`;
}
function range(start, end) {
  return `<time>${esc(start)}</time> – <time>${esc(end)}</time>`;
}

const c = cv.contact;
const contactItems = [
  c.location,
  c.phone,
  c.email && `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`,
  c.website && `<a href="https://${esc(c.website)}">${esc(c.website)}</a>`,
  c.linkedin && `<a href="https://${esc(c.linkedin)}">${esc(c.linkedin)}</a>`,
  c.github && `<a href="https://${esc(c.github)}">${esc(c.github)}</a>`,
]
  .filter(Boolean)
  .map((v) => (v.startsWith('<a') ? v : esc(v)));

const cvFragment = [
  '<article class="cv-doc">',
  '<div class="cv-head">',
  `<h1>${esc(cv.name)}</h1>`,
  `<p class="cv-headline">${esc(cv.headline)}</p>`,
  `<p class="cv-contact">${contactItems.join(' | ')}</p>`,
  '</div>',
  '<section><h2>Ringkasan</h2>',
  `<p>${esc(cv.summary)}</p>`,
  '</section>',
  '<section><h2>Keahlian</h2><ul class="cv-skills">',
  ...cv.skills.map((g) => `<li><strong>${esc(g.group)}:</strong> ${esc(g.items.join(', '))}</li>`),
  '</ul></section>',
  '<section><h2>Pengalaman Kerja</h2>',
  ...cv.experience.map((e) =>
    [
      '<div class="cv-entry">',
      `<h3>${esc(e.title)} — ${esc(e.company)}</h3>`,
      `<p class="cv-meta">${esc(e.location)} | ${range(e.start, e.end)}</p>`,
      `<ul>${e.bullets.map(li).join('')}</ul>`,
      '</div>',
    ].join('')
  ),
  '</section>',
  '<section><h2>Proyek</h2>',
  ...cv.projects.map((p) =>
    [
      '<div class="cv-entry">',
      `<h3>${esc(p.name)} — ${esc(p.role)}</h3>`,
      `<p class="cv-meta">${esc(p.url)}</p>`,
      `<p>${esc(p.desc)}</p>`,
      '</div>',
    ].join('')
  ),
  '</section>',
  '<section><h2>Pendidikan</h2>',
  ...cv.education.map((ed) =>
    [
      '<div class="cv-entry">',
      `<h3>${esc(ed.degree)}${ed.major ? ` ${esc(ed.major)}` : ''} — ${esc(ed.school)}</h3>`,
      `<p class="cv-meta">${esc(ed.location)} | ${range(ed.start, ed.end)}</p>`,
      '</div>',
    ].join('')
  ),
  '</section>',
  '<section><h2>Bahasa</h2>',
  `<p>${esc(cv.languages.join(', '))}</p>`,
  '</section>',
  '</article>',
].join('\n');

/* ---------- encrypt the sensitive fields (email, CV) ---------- */
function encrypt(plaintext) {
  const key = randomBytes(32); // AES-256
  const iv = randomBytes(12); // 96-bit IV, standard for GCM
  const cipher = createCipheriv('aes-256-gcm', key, iv);
  const ciphertext = Buffer.concat([cipher.update(Buffer.from(plaintext, 'utf8')), cipher.final()]);
  const combined = Buffer.concat([ciphertext, cipher.getAuthTag()]); // Web Crypto's AES-GCM expects the tag appended
  return `{ key: '${key.toString('base64')}', iv: '${iv.toString('base64')}', data: '${combined.toString('base64')}' }`;
}

const encLines = [`window.EMAIL_ENC = ${encrypt(contact.email)};`, `window.CV_ENC = ${encrypt(cvFragment)};`].join('\n');
html = html.replace('/*BUILD:EMAIL_ENC*/', encLines);

writeFileSync(outPath, html);
console.log('built index.html from data/content.json + data/cv.json (email & CV encrypted, rest static for SEO)');

/* ---------- optional standalone CV page, for printing to PDF ---------- */
const cvOutArg = process.argv.find((a) => a.startsWith('--cv-out='));
if (cvOutArg) {
  const cvOut = path.resolve(cvOutArg.slice('--cv-out='.length));
  const styles = html.match(/\/\*BUILD:CV_STYLE_START\*\/([\s\S]*?)\/\*BUILD:CV_STYLE_END\*\//)[1];
  const page = `<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8"><title>CV - ${esc(cv.name)}</title><style>${styles}</style></head><body class="cv-standalone">${cvFragment}</body></html>`;
  writeFileSync(cvOut, page);
  console.log('wrote standalone CV to', cvOut);
}
