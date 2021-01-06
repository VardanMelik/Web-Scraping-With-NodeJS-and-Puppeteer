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

    // Take screenshot from site
    await page.screenshot({
        path: 'filename.png',
        fullPage: true
    });

    // Content 
    let html = await page.content(); 

    await browser.close();
})();
