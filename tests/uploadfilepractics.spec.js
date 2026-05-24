import{test, expect} from '@playwright/test'

test('upload file',async ({page})=>{

    page.goto("file:///Users/Playwrite/DemoHTMLDocs/iIframePractics/fileupload.html")
     
    page.on('dialog.message',async dialog=>{

        console.log('dialog message is:',dialog.message())

        expect(dialog.message()).toContain('uploaded')

        await dialog.accept()
    })
 await page.locator('#fileUpload').setInputFiles('tests/upload files/Screenshot 2024-05-26 at 11.32.24 AM.png')

 //click on upload button
 await page.locator('button').click()

 await page.waitForTimeout(2000)

})