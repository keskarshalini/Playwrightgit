//radio button at a time we can select only one

const{test, expect} =require('@playwright/test') 

test('handle inputbox' ,async ({page}) =>{
await page.goto("https://rahulshettyacademy.com/dropdownsPractise/");

await page.locator("//input[@id='ctl00_mainContent_rbtnl_Trip_1']").check();
await expect (await page.locator("//input[@id='ctl00_mainContent_rbtnl_Trip_1']")).toBeChecked();
await expect(await page.locator("//input[@id='ctl00_mainContent_rbtnl_Trip_1']").isChecked()).toBeTruthy();


await expect(await page.locator("//input[@id='ctl00_mainContent_rbtnl_Trip_0']").isChecked()).toBeFalsy();

await page.waitForTimeout(5000);


})