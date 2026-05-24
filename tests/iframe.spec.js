import{test, expect} from '@playwright/test'
test('iframe locator', async({page})=>{

page.goto("file:///Users/Playwrite/DemoHTMLDocs/iIframePractics/index.html")

//count total no of iframe on this page
const allframes =page.frames()
console.log("total no of frames:" ,allframes.length)
   

const leftFrame = page.frameLocator('iframe[name="leftFrame"]')
await leftFrame.locator("input[name='name']").fill("Prachi Gupta")
 await leftFrame.locator("input[name='email']").fill("shalini@gmai.com")


//locate right frame
const rightFrame = page.frame("rightFrame")

await rightFrame.locator('select').selectOption('Option Two')
 rightFrame.getByText("Click Me").click()

await page.waitForTimeout(1000)
})
