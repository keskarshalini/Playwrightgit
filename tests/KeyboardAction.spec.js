import{test, expect} from '@playwright/test'

test.skip('Keyboard Action', async({page})=>{

await page.goto("https://the-internet.herokuapp.com/key_presses")

await page.keyboard.press('A')

await expect(page.locator('#result')).toHaveText('You entered: A')


await page.keyboard.press('Enter')

await expect(page.locator('#result')).toHaveText('You entered: ENTER')

await page.keyboard.press('Control')


await expect(page.locator('#result')).toHaveText('You entered: CONTROL')

await page.waitForTimeout(2000)



})

test('Keyboard', async({page})=>{

page.goto("file:///Users/Playwrite/DemoHTMLDocs/iIframePractics/Keyboard.html")

await page.locator('#box1').click()
await page.keyboard.type('Welcome to playwright keyboard actions.')

await page.keyboard.press('Control+A')

//press control + C top copy the selected text
    await page.keyboard.press('Control+C')


    
//click on the second text box
await page.locator('#box2').click()

//press control + V to paste the copied text
await page.keyboard.press('Control+V')

//verify the box2 text
await expect(page.locator('#box2')).toHaveValues('Welcome to playwright keyboard actions.')
await page.waitForTimeout(3000)//for demo only

})