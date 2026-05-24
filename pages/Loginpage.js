exports.Loginpage =

class Loginpage{

    constructor(page) 
    {
        this.page=page;
    this.loginlink='#login2'
    this.username = '#loginusername';
    this.password ='#loginpassword';
    this.loginbtn='//button[normalize-space()="Log in"]';
    }
    async gotologinpage(){
        await this.page.goto("https://www.demoblaze.com/index.html");
    }
    async login(username,password){

await this.page.locator(this.loginlink).click();
await this.page.locator(this.username).fill(username);
await this.page.locator(this.password).fill(password);
await this.page.locator(this.loginbtn).click();

    }
}

