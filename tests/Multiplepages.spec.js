const{test, expect, chromium} = require ('@playwright/test')

test('handle pages/windows', async()=>{


    const browser = await chromium.launch()//new pages
    const context = await browser.newContext()//multiple n no pages

   const page1 = await context.newPage()
   const page2 = await context.newPage()

   const allpages = context.pages()
   console.log("no of pages:", allpages.length)




})