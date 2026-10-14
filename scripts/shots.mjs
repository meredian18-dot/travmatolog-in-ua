import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const pages = [
  { name: "home", url: `${BASE}/uk/` },
  { name: "clinical", url: `${BASE}/uk/clinical/` },
];
const widths = [375, 390, 768, 1024];

const browser = await chromium.launch();
for (const p of pages) {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    await page.goto(p.url, { waitUntil: "networkidle" });
    await page.waitForTimeout(300);

    const report = await page.evaluate((vw) => {
      const docW = document.documentElement.scrollWidth;
      const overflow = docW - vw;
      const bad = [];
      if (overflow > 1) {
        for (const el of document.querySelectorAll("*")) {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && r.right > vw + 1) {
            const cls = (el.className && el.className.toString) ? el.className.toString().slice(0, 60) : "";
            bad.push(`${el.tagName.toLowerCase()}.${cls}  right=${Math.round(r.right)} w=${Math.round(r.width)}`);
          }
        }
      }
      return { docW, overflow, bad: bad.slice(0, 8) };
    }, w);

    const tag = `${p.name}-${w}`;
    await page.screenshot({ path: `/tmp/shot-${tag}.png`, fullPage: true });
    const flag = report.overflow > 1 ? `⚠ OVERFLOW +${report.overflow}px` : "ok";
    console.log(`${tag.padEnd(16)} docW=${report.docW} vw=${w}  ${flag}`);
    for (const b of report.bad) console.log(`    ${b}`);
    await ctx.close();
  }
}
await browser.close();
console.log("screenshots in /tmp/shot-*.png");
