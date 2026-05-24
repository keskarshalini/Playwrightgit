import {test, expect} from '@playwright/test'

test.skip('Single File Upload Demo', async({page})=>{

    //step1. open URL
    await page.goto("file:///C:/Users/ASUS/Desktop/PlaywrightAutomationVSCodeExtn/DemoHTMLDocs/FileUpload1.html")

    //Dialog handler - for alert popup
    page.on('dialog', async dialog =>{

        //print alert message in console
        console.log("dialog message is:", dialog.message() )

        //verify alert messaeg contains word "uploaded"
     expect(dialog.message()).toContain('uploaded')

     //click OK button on alert to accept the dialog
     await dialog.accept()

    })

    
     //upload file 
     await page.locator('#fileUpload').setInputFiles('tests/upload files/Screenshot 2024-05-26 at 11.32.24 AM.png')
    
     //click on upload button
     await page.locator('button').click()

     //wait for 3 secs for demo only
     //await page.waitForTimeout(3000)

    
})

test.skip('multiple files',async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.locator('#filesToUpload').setInputFiles(['tests/upload files/Screenshot 2024-05-26 at 11.32.24 AM.png','tests/upload files/Shalini_Maske.pdf'])
    
    const files= page.locator('#fileList li')

    await expect(files.nth(0)).toHaveText('Screenshot 2024-05-26 at 11.32.24 AM.png')
await expect(files.nth(1)).toHaveText('Shalini_Maske.pdf')
    


await page.locator('#filesToUpload').setInputFiles([])
await expect(page.locator('#fileList')).toHaveText('No Files Selected');



await page.waitForTimeout(3000)

})

test('Drag and Drop files',async({page})=>{

    page.goto("file:///Users/Playwrite/DemoHTMLDocs/iIframePractics/draganddropfiles.html")

    await page.locator('#fileInput').setInputFiles('tests/upload files/Shalini_Maske.pdf');

    await expect(page.getByText('Shalini_Maske.pdf')).toBeVisible();

    await page.waitForTimeout(2000);

})