const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.setViewport({
        width: 1280,
        height: 800
    });
    // Open site in new tab
    await page.goto('https://cnews.ng/');

    await browser.close();
})();
