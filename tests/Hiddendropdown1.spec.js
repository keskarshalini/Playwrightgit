import {test, expect} from "@playwright/test";

test('hiddeb dropdown practics', async({page})=>{


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//inputbox for username

 await page.locator("[name='username']").fill('Admin')


//inputbox for password

 await page.locator("[name ='password']").fill('admin123')

//login button 

await page.getByRole('button',{name:'Login'}).click();


//click on PIM

await page.getByRole('link',{name:'PIM'}).click();

//handling dropdown 

await page.locator('.oxd-select-wrapper').nth(2).click()

await page.waitForTimeout(3000)

await page.waitForSelector()
})


