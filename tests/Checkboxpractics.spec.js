import{test,expect} from '@playwright/test'

test('checkbox', async({page})=>{

    await page.goto("https://www.techlistic.com/p/selenium-practice-form.html",{waitUntil:"domcontentloaded"})

    const checkbox1=  page.locator('#tool-0');
    const checkbox2=  page.locator('#tool-1');
    const checkbox3=  page.locator('#tool-2');
   
// await checkbox1.check()
// await expect(checkbox1).toBeChecked()

// await (checkbox2).uncheck()
// await expect(checkbox3).not.toBeChecked()


const checkboxs = [checkbox1,checkbox2,checkbox3];

for(const checkbox of checkboxs){

    await checkbox.check()

    expect(checkbox).toBeChecked()

    
    for(const checkbox of checkboxs){

        const isChecked = await checkbox.isChecked()

        if (isChecked){
            await checkbox.uncheck()
            await expect(checkbox).not.toBeChecked()
        }
    }

}
await page.waitForTimeout(3000)
})