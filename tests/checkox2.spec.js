import{test,expect} from '@playwright/test'

test('checkbox', async({page})=>{

    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html",{waitUntil:"domcontentloaded"})

    const checkbox1 = page.locator('#tool-0')
    const checkbox2 = page.locator('#tool-1')
    const checkbox3 = page.locator('#tool-3')
    const checkbox4= page.locator('#profession-0')
    const checkbox5 = page.locator('#profession-1')



// await page.locator("//input[@type='checkbox']").first().check();
// await page.locator("//input[@type='checkbox']").last().check();
// await page.locator("//input[@type='checkbox']").nth(2).check();

const checkboxs = await page.locator("//input[@type='checkbox']").all();
 const count = checkboxs.count(5);
expect(count).toBeGreaterThan(0)

for(const checkbox of checkboxs){
 await  checkbox.check();

}
await page.waitForTimeout(3000)
})