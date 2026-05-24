import{test, expect} from '@playwright/test'
import { count } from 'console'

test('locaters',async({page})=>{

await page.goto("https://www.saucedemo.com/")

await page.locator('#user-name').fill("standard_user")
await page.locator('#password').fill("secret_sauce")
await page.locator("//input[@id='login-button']").click()
await expect(page).toHaveURL(/inventory.html/);
//await expect(page.locator('.title')).toHaveText('Products');
//const titlevisible = page.locator('.title')
//await expect(titlevisible).toBeVisible()

// const totalproducts = await page.$$('.inventory_item_name ')
// console.log('Total no of product:',totalproducts.length)

// for(const products of totalproducts){
// const productnames = await products.textContent()
// console.log(productnames)
// }
const totalproducts =  page.locator('.inventory_item_name')
const count = await totalproducts.count()
console.log('totalproducts',count)

for(let i=0 ;i<count;i++){

    const name = await totalproducts.nth(i).textContent()
    console.log(name)

}
await page.waitForTimeout(2000);
})