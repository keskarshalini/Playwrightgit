exports.Cartpage  =

class Cartpage{

    constructor(page){
        this.page=page;
        this.nopfproductaddtocart='//tbody//td[2]'
    }
    async checkproductincart(productname){
    const productincart = await this.page.locator(this.nopfproductaddtocart)
    const count = await productincart.count();
    for(let i=0; i<count;i++){
        const producttext = await productincart.nth(i).textContent();
        console.log(producttext);
        if(producttext.trim()===productname){
            return true;
            break;
        }

    }


 return false;

    }
}
