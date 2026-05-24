const {test, expect}=require('@playwright/test')

test ('handale checkbox', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/")
await page.locator("//input[@id='ctl00_mainContent_chk_friendsandfamily']").check();

await expect(await page.locator("//input[@id='ctl00_mainContent_chk_friendsandfamily']")).toBeChecked();

await expect(await page.locator("//input[@id ='ctl00_mainContent_chk_friendsandfamily']").isChecked()).toBeTruthy()

await expect(await page.locator("//input[@id='ctl00_mainContent_chk_IndArm']").isChecked()).toBeFalsy();


//multiple checkbox by using array

const checkboxs=["//input[@id='ctl00_mainContent_chk_IndArm' and @type='checkbox']",

    
                "//input[@id='ctl00_mainContent_chk_SeniorCitizenDiscount' and @type='checkbox']",
               "//input[@id='ctl00_mainContent_chk_StudentDiscount' and @type='checkbox']"
];


for(const locator of checkboxs)

{  

    await page.locator(locator).check();

}
await page.waitForTimeout(5000);



//unselct multiple chebox whi

for(const locator of checkboxs)
{
    if (await page.locator(locator).isChecked())
    await page.locator(locator).uncheck();
}
await page.waitForTimeout(5000);

})