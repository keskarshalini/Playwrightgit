import{test, expect} from '@playwright/test'

test('Delete resources ', async({request})=>{

const authdata={
    "username" : "admin",
    "password" : "password123"
}

   const resonsdata= await request.post("https://restful-booker.herokuapp.com/auth",
   {headers:{"Content-Type":"application/json"},data:authdata})

   const responsejson = await resonsdata.json()

   const authtoken = responsejson.token
   console.log("token is:"+authtoken)
  
   const bookingdata={
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
 const createbooking= await request.post("https://restful-booker.herokuapp.com/booking",
 {headers:{"Content-Type": "application/json"},data:bookingdata})

 const bookingjson = await createbooking.json()
 console.log(bookingjson)

 const bookingID = bookingjson.bookingid
 console.log("Booking ID is:"+bookingID)

 const deleteresource= await request.delete("https://restful-booker.herokuapp.com/booking",
 {headers:{"Content-Type":"application/json","Cookie":"token="+authtoken}})

  console.log(deleteresource.status())
  expect(deleteresource.status()).not.toBe(201)
  console.log(deleteresource.statusText())
  expect(deleteresource.statusText()).toBe('Not Found')

  const getresponse = await request.get("https://restful-booker.herokuapp.com/booking/"+bookingID)
console.log(getresponse.status())
console.log(getresponse.statusText())
})