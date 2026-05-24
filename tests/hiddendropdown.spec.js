import{test, expect} from '@playwright/test'

test('Hidden dropdown',async({page})=>{


await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//locate username input box and type username 
 await page.locator("[name='username']").fill("Admin")

 //locate password using input box and type password

 await page.locator("[name ='password']").fill("admin123")

//lacate login button and perform click action

await page.getByRole('button',{name:'Login'}).click()



// locate PIM  link and peroform click action

await page.getByRole('link',{name:'PIM'}).click()


////--------dropdown handling--------//
/// loacte job title dropdown and click on it

 await page.locator('.oxd-select-wrapper').nth(2).click()

// ///
// await page.waitForTimeout(3000)

 await page.waitForSelector('.oxd-select-dropdown[role="listbox"]',{state:'visible'})

const countoptions= page.locator('.oxd-select-option span')//we get listof elements

 const count = await countoptions.count()//count return total no of elements in list



 console.log("total Option:",count)

// //loop trought each dropdown option using index

 for(let i=0; i<count; i++){

// //innettext() reads only the visible text shown to the user

 const text = await countoptions.nth(i).innerText()

console.log(text)

 }

})