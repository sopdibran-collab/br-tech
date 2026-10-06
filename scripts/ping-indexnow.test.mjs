import assert from "node:assert/strict";
import test from "node:test";
import {
  HOST,
  KEY,
  KEY_LOCATION,
  SITEMAP_URL,
  acceptLoc,
  buildPayload,
  decodeXml,
  parseSitemapLocs,
} from "./ping-indexnow.mjs";

const LIVE_URLS = [
  "https://brtech.ch",
  "https://brtech.ch/services",
  "https://brtech.ch/services/installation",
  "https://brtech.ch/services/double-flux",
  "https://brtech.ch/services/depannage",
  "https://brtech.ch/maintenance",
  "https://brtech.ch/contact",
  "https://brtech.ch/a-propos",
  "https://brtech.ch/mentions-legales",
  "https://brtech.ch/confidentialite",
];

test("cible l’apex, pas www", () => {
  assert.equal(HOST, "brtech.ch");
  assert.equal(SITEMAP_URL, "https://brtech.ch/sitemap.xml");
  assert.equal(KEY_LOCATION, `https://brtech.ch/${KEY}.txt`);
});

test("accepte les URL du sitemap et rejette le reste", () => {
  for (const url of LIVE_URLS) {
    assert.equal(acceptLoc(url), url);
  }

  assert.equal(acceptLoc("https://www.brtech.ch/"), null);
  assert.equal(acceptLoc("https://www.brtech.ch/services"), null);
  assert.equal(acceptLoc("http://brtech.ch/services"), null);
  assert.equal(acceptLoc("https://brtech.ch/contact?type=visite"), null);
  assert.equal(acceptLoc("https://brtech.ch/a-propos#equipe"), null);
  assert.equal(acceptLoc(`https://brtech.ch/${KEY}.txt`), null);
  assert.equal(acceptLoc("https://brtech.ch/merci"), null);
  assert.equal(acceptLoc("https://brtech.ch/api/contact"), null);
  assert.equal(acceptLoc("https://example.com/services"), null);
  assert.equal(acceptLoc("pas une url"), null);
});

test("décode les entités XML avant d’accepter une URL", () => {
  assert.equal(decodeXml("a&amp;b&lt;c&gt;d&quot;e&apos;f"), "a&b<c>d\"e'f");
  const xml = `<urlset><url><loc>https://brtech.ch/l&apos;air</loc></url></urlset>`;
  assert.deepEqual(parseSitemapLocs(xml), ["https://brtech.ch/l'air"]);
});

test("le corps IndexNow porte l’hôte apex, la clé et la liste complète", () => {
  const payload = buildPayload(LIVE_URLS);
  assert.deepEqual(payload, {
    host: "brtech.ch",
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: LIVE_URLS,
  });
  assert.equal(payload.urlList.length, 10);
});

test("déduplique et décode les loc du sitemap", () => {
  const xml = `
    <urlset>
      <url><loc>https://brtech.ch/services</loc></url>
      <url><loc>https://brtech.ch/services</loc></url>
      <url><loc>https://www.brtech.ch/contact</loc></url>
      <url><loc>https://brtech.ch/merci</loc></url>
      <url><loc>https://brtech.ch/a-propos?x=1&amp;y=2</loc></url>
      <url><loc> https://brtech.ch/maintenance </loc></url>
    </urlset>
  `;
  assert.deepEqual(parseSitemapLocs(xml), [
    "https://brtech.ch/services",
    "https://brtech.ch/maintenance",
  ]);
});
