const {test, expect, request} = require ('@playwright/test')

test.only("get respone",async({request})=>{

    const respone= await request.get('https://restful-booker.herokuapp.com/booking')
    console.log(await respone.json())
   // expect(respone.status()).toBe(200)

})

test(' get practics two', async()=>{
request.newContext();
const respone= await request.get('https://restful-booker.herokuapp.com/booking')
console.log(await respone.json())

})