import{ test, expect}from '@playwright/test'

test('locators', async({page})=>{

    await page.goto("https://www.demoblaze.com/index.html")//lunch apllication on browser

//we need to click on login button --property

await page.click('id=login2')

//we will get login form css locators using # and use as locators

//provide username -CSS selector

await page.fill('#loginusername','shalini')

await page.fill('#loginpassword','123')

//using xpath cick on login button  -Xpath

await page.click("//button[normalize-space()='Log in']")

//logout button on page is visible or not -xpath
const logoutlink= await page.locator('//a[normalize-space()="Log out"]')

await expect(logoutlink).toBeVisible();



await page.close()
})