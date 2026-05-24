exports.Homepage =

class Homepage{

    constructor(page)
    
    {
        this.page=page;
this.productlist='.hrefch'
this.addtocart='//a[normalize-space()="Add to cart"]'
this.cart='#cartur'

    }

    async addproducttocart(productname){
     
        const products = this.page.locator(this.productlist);
        const count = await products.count();
        for(let i=0; i<count;i++){
            const product = products.nth(i);
            if((await product.textContent()).trim() === productname) {
                await Promise.all([
                    this.page.waitForNavigation(),
                    product.click()
                ]);
                break;

            }
        }

        await this.page.on('dialog', async dialog=>{
if(dialog.message().includes('added')){

    await dialog.accept();
}
        })

        await this.page.locator(this.addtocart).click();
        
    }
    async gotocart(){
        await this.page.locator(this.cart).click();
    }
}

