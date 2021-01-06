const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.adjarabet.am/en', {waitUntil: 'networkidle2'});
  await page.pdf({ 
      path: 'adjarabet.pdf', 
      format: 'Letter',
      margin: {
          top: '1in',
          bottom: '1in',
          left: '1in',
          right: '1in'
      }
    });

  await browser.close();
})();

/*const puppeteer = require('puppeteer');
const siteURI = 'https://cnews.ng/business/iran-shuts-down-cryptocurrency-mining-farms/';

(async () => {
    try {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    
    await page.goto(siteURI, {
        waitUntil: 'networkidle2'
    });
    await page.pdf({
        path: 'fileName.pdf',
        format: 'A4'
    });


    await browser.close();
} catch (e) {
    console.log('Error message: ' + e.message);
}
})();
*/