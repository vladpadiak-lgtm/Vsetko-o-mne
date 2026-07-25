import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Ukrainian portfolio and all four website links", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Мої проєкти — вебпортфоліо<\/title>/i);
  assert.match(html, /Сайти, які/);
  assert.match(html, /Братислава/);
  assert.match(html, /Popularity/);
  assert.match(html, /Auto Service/);
  assert.match(html, /HAUS/);
  assert.match(html, /vladpadiak-lgtm\.github\.io\/bratislava\//);
  assert.match(html, /vladpadiak-lgtm\.github\.io\/Popularity\//);
  assert.match(html, /vladpadiak-lgtm\.github\.io\/auto-servis\//);
  assert.match(html, /vladpadiak-lgtm\.github\.io\/haus\//);
  assert.doesNotMatch(
    html,
    /github\.com|Код на GitHub|Kód na GitHube|>GitHub(?:\s|<|↗)/i,
  );
});

test("includes Slovak translations and removes the starter preview", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Weby, ktoré/);
  assert.match(page, /Štyri nápady\. Štyri svety\./);
  assert.match(page, /changeLanguage\("sk"\)/);
  assert.doesNotMatch(
    page,
    /github\.com|Код на GitHub|Kód na GitHube|>GitHub(?:\s|<|↗)/i,
  );
  assert.match(layout, /lang="uk"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
