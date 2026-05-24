const {test, except}=require('@playwright/test')
 
test('loctetingmultipleelements', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    const links=await page.$$('a');


//want to print text of every link

// for(const link of links){

//    const linktext=  await link.textContent();
//    console.log(linktext);

// }

const products= await page.$$("//div[@id='tbodyid']//div//h4/a")//--xpath loctors
for(const product of products){

    const productname =await product.textContent();
    console.log(productname);

}


})

   

