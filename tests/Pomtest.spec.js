import{test, expect} from '@playwright/test'
import { Loginpage } from '../pages/Loginpage'
import { Homepage } from '../pages/Homepage';
import{ Cartpage } from '../pages/Cartpage';
test('test', async({page})=>{

//login 

const login = new Loginpage(page);
 await login.gotologinpage();
 await login.login('pavanol','test@123')

 const homepage = new Homepage(page);
 await homepage.addproducttocart("Nexus 6")
 await page.waitForTimeout(3000)
 await homepage.gotocart();

 const Cart = new Cartpage(page);
 await Cart.checkproductincart('Nexus 6')

})