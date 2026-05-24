import{test, expect} from'@playwright/test'
import { request } from 'http'
test
('updating api ',async({request})=>{
const putdata={
    "username" : "admin",
    "password" : "password123"
}
 const response= await request.post("https://restful-booker.herokuapp.com/auth",{headers:{"Content-Type":"application/json"},data:putdata})
const jsonresponse= await response.json()
const authtoken=jsonresponse.token
console.log("token is :"+authtoken);

const booking={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"

}
const create = await request.post(" https://restful-booker.herokuapp.com/booking",{headers:{"Content-Type":"application/json"},data:booking})
const newbookingjson =await create.json()
console.log(newbookingjson)
const bookingID=newbookingjson.bookingid
console.log("new booking ID:"+bookingID)

const updatabooking={
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 400,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2026-06-01",
        "checkout" : "2026-06-02"
    },
    "additionalneeds" : "Dinner"

}
const resonsdata =await request.put("https://restful-booker.herokuapp.com/booking/"+bookingID,{headers:{"Content-Type":"application/json","Accept":"application/json","Cookie":"token="+authtoken},data:updatabooking})
const newresponsedata= await resonsdata.json()
console.log(newresponsedata)
expect(newresponsedata.totalprice).toBe(400)
expect(newresponsedata.additionalneeds).not.toBe('Breakfast')

})