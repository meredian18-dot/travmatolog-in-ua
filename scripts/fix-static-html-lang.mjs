// Next.js static export shares the root html lang attribute across locales.
// Correct the exported HTML before publishing, without requiring client-side JS.
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const output = join(process.cwd(), "out");
for (const lang of ["uk", "en", "de", "pl"]) {
  const root = join(output, lang);
  if (!existsSync(root)) continue;
  const visit = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) visit(path);
      else if (entry.name.endsWith(".html")) {
        const html = readFileSync(path, "utf8");
        const corrected = html.replace(/(<html\b[^>]*\blang=")[^"]*(")/i, `$1${lang}$2`);
        if (corrected === html && lang !== "uk") throw new Error(`Missing HTML lang in ${path}`);
        writeFileSync(path, corrected);
      }
    }
  };
  visit(root);
}
