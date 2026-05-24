const {test, expect } = require('@playwright/test')

test('Home Page',async({page})=>{// async is a promise

await page.goto('https://www.demoblaze.com/index.html');

const pagetitle=page.title()
console.log('Page title is:', pagetitle);

await expect(page).toHaveTitle('STORE');//validation applied for title

const pageurl=page.url()
console.log('page url is:',pageurl);
await expect(page).toHaveURL('https://www.demoblaze.com/index.html');//validation applied for url



await page.close();

})