import { test, expect } from "@playwright/test";

// test.skip(' test 1', async({page})=>{

//     console.log('this is test 1')

// })
// test.only(' test 2', async({page})=>{

//     console.log('this is test 2')

// })
// test(' test 3', async({page, browserName})=>{

//     console.log('this is test 3')
//     if(browserName==='chromium'){
//         test.skip()
//     }

// })
//fixme---------

// test(' test 4', async({page})=>{
// test.fixme()
//     console.log('this is test 4')

// })

// test(' test 5', async({page})=>{
// test.fail()
//     console.log('this is test 5')
//   expect(1).toBe(12)
// })
//slow---------------
test(' test 6', async({page})=>{

test.slow()
    await page.goto("https://www.demoblaze.com/index.html")
    console.log('this is test 6')

})