// Screenshot every stop at desktop and phone size and print page errors.
// Run: NODE_PATH=$(npm root -g) node tools/shoot.js   (needs Playwright + Chromium)
const { chromium } = require('playwright');
const path = require('path'); require('fs').mkdirSync(path.resolve(__dirname, '../shots'), { recursive: true });
(async () => {
  const file = 'file://' + path.resolve(__dirname, '../rajasthan/index.html');
  const b = await chromium.launch(); const errs = [];
  for (const [w, h, n] of [[1440, 900, 'desktop'], [390, 844, 'phone']]) {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    p.on('pageerror', e => errs.push(n + ': ' + e.message));
    await p.goto(file); await p.waitForTimeout(1200);
    for (let i = 1; i <= 14; i++) {
      if (i > 1) { await p.click('#next'); await p.waitForTimeout(2300); }
      await p.screenshot({ path: path.resolve(__dirname, `../shots/${n}-${String(i).padStart(2,'0')}.png`) });
    }
    await p.close();
  }
  console.log(errs.length ? errs.join('\n') : 'No page errors.');
  await b.close();
})();
