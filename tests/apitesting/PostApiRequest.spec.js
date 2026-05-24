import{test, expect} from '@playwright/test'
import { exec } from 'child_process'
import { request } from 'http'
test.skip('create post api request', async({request})=>{

    const authdata={
        "username" : "admin123",
    "password" : "password123"

    }
   
    const responsepost= await request.post('https://restful-booker.herokuapp.com/auth',{Headers:{"Content-Type":"application/json"},data:authdata})
console.log(responsepost.status())

const resonsdata =await responsepost.json()

expect(resonsdata.token).not.toBeNull()

})

test('createbooking',async({request})=>{

    const booking = {
        "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2026-01-01"
    }
    ,
    "additionalneeds" : "dinner"
}

  const postbooking= await request.post('https://restful-booker.herokuapp.com/booking',{Headers:{"Content-Type": "application/json"},data:booking})
   
  console.log(postbooking.status())
const resonsdata = await postbooking.json()
console.log(resonsdata);
expect(resonsdata.bookingid).not.toBeNull()
expect(resonsdata.booking.firstname).not.toBe('shalini')
})