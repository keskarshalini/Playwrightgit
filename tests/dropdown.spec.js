import{test, expect} from '@playwright/test'

test('Dropdown', async({page})=>{

    //open url

    await page.goto("https://rahulshettyacademy.com/dropdownsPractise/")
// locate dropdown
const Dropdown= page.locator('#ctl00_mainContent_DropDownListCurrency')
     //ways to select opionss
// 1. by using label
//await Dropdown.selectOption({label:'INR'})
//expect(Dropdown).toHaveValue('INR')

// 2. by value
await Dropdown.selectOption({value:'USD'})
expect(Dropdown).toHaveValue('USD')

//3.by using index

//await Dropdown.selectOption({index:2})
//expect(Dropdown).toHaveValue('AED')

// await Dropdown.selectOption({index:3})
// const selectedvalue = await Dropdown.inputValue()
// expect(selectedvalue).not.toBe('');

//////----Asserations--------///////

///validate no of options in dropdrow
const options =Dropdown.locator('option');

//count optioms in dropdown
const optionscount =await options.count();

console.log(optionscount)

expect(optionscount).toBeGreaterThan(1);

// Assertion validate presence of value
//retrive the visible text of all <otions> elements in the dropdown
//this reterns an array of stions names as a string
const allcurrency= await options.allTextContents();

//verify that "hubali" is present in dropdown 

expect(allcurrency).toContain('INR');

await page.waitForTimeout(5000);
})