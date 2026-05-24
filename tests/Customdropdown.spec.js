import{test, expect} from'@playwright/test'
test('customdropdown', async({page})=>{

await page.goto("file:///Users/Playwrite/DemoHTMLDocs/customdropdown.html")


await page.locator('#countryDropdown').click()
const options = page.locator('#countryDropdown .options li')
for(let i=0 ;await options.count();i++){

    const optiontext = await options.nth(i).textContent()
    console.log(optiontext)
 if(optiontext==='India')
 {
    await options.nth(i).click()
    break;
 }
}
await page.waitForTimeout(2000)
})