const {test, expect}=require('@playwright/test')

test('handle inputbox' ,async ({page}) =>{


    await page.goto("https://rahulshettyacademy.com/client/#/auth/register");

    await expect(await page.locator("//input[@id='firstName']")).toBeVisible();
    await expect(await page.locator("//input[@id='firstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='firstName']")).toBeEditable();
    await expect(await page.locator("//input[@id='firstName']")).toBeEnabled();
   



    //inputbox - firstname
    await page.locator("//input[@id='firstName']").fill("shalini");
    await page.waitForTimeout(5000);

})