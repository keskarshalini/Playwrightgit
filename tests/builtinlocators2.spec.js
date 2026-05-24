import{test, expect} from'@playwright/test'
test('built in locators',async({page})=>{

    await page.goto('https://practice.expandtesting.com/login')

    await page.getByLabel('username').fill('practice');
    await page.getByLabel('password').fill('SuperSecretPassword');
await page.getByRole('button',{name:'Login'}).click()
await expect(page.getByText('You logged into a secure area!')).toBeVisible()
await page.getByRole('link',{name:'Home'}).click()
})