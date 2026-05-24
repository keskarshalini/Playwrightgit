import {test, expect } from "@playwright/test";

test('Dialog Handling Alert, confirm, prompt', async({page})=>{

        //Step1: open url


await page.goto("https://testpages.eviltester.com/pages/basics/alerts-javascript/")

//  Step2: we must register the dialog handler before clicking the button
//    once means this handler will run only one time


page.once('dialog' ,async dialog=>{

expect (dialog.type()).toBe('alert');

expect(dialog.message()).toContain('I am an alert box!');

await dialog.accept()

})
await page.getByText('Show alert box').click()
 
await expect(
    page.getByText('You triggered and handled the alert dialog')
  ).toBeVisible();


  
  await page.waitForTimeout(3000)
})
