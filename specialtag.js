const puppeteer = require('puppeteer');

const siteURI = 'https://cnews.ng/business/iran-shuts-down-cryptocurrency-mining-farms/';
const repoLinks = 'entry-title';

(async () => {
    try {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    
    await page.goto(siteURI, {
        waitUntil: 'networkidle2'
    });
    await page.waitForSelector('figure-categories figure-categories-bg');

    let tmp = await page.evaluate( () => {
        const repos = document.querySelectorAll(repoLinks);
        return Array.from(repos).map( (repo) => {
            return repo.href
        });
    })
    console.log('Returned data: ' + tmp);

    await browser.close();
} catch (e) {
    console.log('Error message: ' + e.message);
}
})();
