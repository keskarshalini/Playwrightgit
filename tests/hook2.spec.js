import{test,expect} from '@playwright/test'

let page;
test.beforeAll(async ({browser})=>{
page = await browser.newPage()


await page.goto("https://www.demoblaze.com/index.html")
//Login 
await page.locator('#login2').click()
 await page.locator('#loginusername').fill('panavol')
 await page.locator('#loginpassword').fill('password')
await page.locator('//button[normalize-space()="Log in"]').click()

});

//logout
test.afterAll(async (browser)=>{
    await page.locator('#logout2').click()
});
test('home page test blocks', async()=>{

//home page
const total = await page.$$('.hrefch')
expect(total).toHaveLength(9)

});

test('Add Product to cart Test', async()=>{

   //add product to the cart
   await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click()
   await page.locator('.btn.btn-success.btn-lg').click()
   page.on('dialog',async dialog=>{

    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()

})
    
});