const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    
    // Open site in new tab
    await page.goto(
        'https://cnews.ng/', 
        { waitUntil: 'networkidle2'}
        );

    // Content 
    let html = await page.content(); 

    // save file/content

    await browser.close();
})();
