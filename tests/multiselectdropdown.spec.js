
import{test, expect} from '@playwright/test'

test('Multi select drop down',async({page})=>{

    await page.goto("https://testpages.eviltester.com/pages/forms/html-form/")
   
      
    const multipleselect = page.locator('select[name="multipleselect[]"]')
    //await multipleselect.selectOption([{value:'ms1'},{value:'ms2'}])
    await multipleselect.selectOption([{ label: 'Selection Item 2' }, { label: 'Selection Item 4' }]);


    await expect(multipleselect.locator('option:checked')).toContainText(['Selection Item 2','Selection Item 4'])
await expect(multipleselect.locator('option:checked')).not.toContainText(['Selection Item 1','Selection Item 3'])
})
