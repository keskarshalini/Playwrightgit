import{test, expect} from '@playwright/test'

test('Prompt Alert' ,async({page})=>{

page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")

page.once('dialog',async dialog=>{

expect(dialog.type()).toBe('prompt')
expect(dialog.message()).toBe('I prompt you')
expect(dialog.defaultValue()).toBe('change me')

await dialog.accept('shalini')



})

await page.getByText('Show prompt box').click()
await expect(page.locator('#promptreturn')).toHaveText('shalini')

await page.waitForTimeout(2000)
})