const {test, except, expect,}=require('@playwright/test');

test('locators_builtin',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

//page.getByAltText() to locate an element, usually image, by its text alternative.


const logo= page.getByAltText('OrangeHRM Logo')//caputuring logo element
await expect(logo).toBeVisible();


//page.getByRole() to locate by explicit and implicit accessibility attributes.





//page.getByPlaceholder() to locate an input by placeholder.//input box


await page.getByPlaceholder('username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')

await page.getByRole('button',{type: 'Submit'} ).click()


//await expect(page.getByText('Dashboard')).toBeVisible();

//await page.getByLabel('Username').click()


})










