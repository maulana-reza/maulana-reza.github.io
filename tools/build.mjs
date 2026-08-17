#!/usr/bin/env node
/*
 * Build script: regenerates index.html from templates/index.template.html + data/content.json.
 *
 * data/content.json is the editable source of truth for page content. Run this script
 * after changing it:
 *
 *   node tools/build.mjs
 *
 * Only the contact email is treated as sensitive: it gets AES-256-GCM encrypted (fresh
 * random key/IV each build) and embedded as ciphertext in the shipped index.html, then
 * decrypted client-side via the Web Crypto API on page load. Note this is obfuscation
 * against casual scraping, not real confidentiality — the decryption key ships in the
 * same page, since there is no server to keep it secret on a static site. Every other
 * field is public portfolio content and is baked into the HTML as plain, crawlable text.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { randomBytes, createCipheriv } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const contentPath = path.join(root, 'data', 'content.json');
const templatePath = path.join(root, 'templates', 'index.template.html');
const outPath = path.join(root, 'index.html');

const content = JSON.parse(readFileSync(contentPath, 'utf8'));
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
    `${pad}  <img src="${esc(p.img)}" alt="${esc(p.alt)}" loading="lazy" width="200" height="130">`,
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

/* ---------- encrypt the sensitive field (email) ---------- */
const key = randomBytes(32); // AES-256
const iv = randomBytes(12); // 96-bit IV, standard for GCM
const cipher = createCipheriv('aes-256-gcm', key, iv);
const ciphertext = Buffer.concat([cipher.update(Buffer.from(contact.email, 'utf8')), cipher.final()]);
const authTag = cipher.getAuthTag();
const combined = Buffer.concat([ciphertext, authTag]); // Web Crypto's AES-GCM expects the tag appended

const emailEncLine = `window.EMAIL_ENC = { key: '${key.toString('base64')}', iv: '${iv.toString('base64')}', data: '${combined.toString('base64')}' };`;
html = html.replace('/*BUILD:EMAIL_ENC*/', emailEncLine);

writeFileSync(outPath, html);
console.log('built index.html from data/content.json (email encrypted, rest static for SEO)');
