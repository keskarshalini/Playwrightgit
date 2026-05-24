import { test, expect } from '@playwright/test'

test.skip('DatePicker2', async ({ page }) => {

    //define target date
    const targetYear = "2027"
    const targetMonth = "March"
    const targetDate = "25"

    //Step1: open url
    await page.goto("file:///Users/Playwrite/DemoHTMLDocs/iIframePractics/Datepicker.html")

    //step2: click on dropdown to open calender
    await page.locator('#datepickerNoDropdown').click();

    //step3: wait until the calender is visible to ensure stability
    const calender = page.locator('.ui-datepicker')
    await expect(calender).toBeVisible();

    //step4: use a loop to lick the NEXT button until we read the correct month and year

    while (true) {
        //get the currently displayed month and year from the calender
        const currentMonth = (await page.locator('.ui-datepicker-month').textContent()).trim();
        const currentYear = (await page.locator('.ui-datepicker-year').textContent()).trim();

        console.log("Current Month:",currentMonth, "Current Year:", currentYear);

        //if the current month and year match our garget break the loop
        if(currentMonth===targetMonth && currentYear===targetYear)
        {
            break;
        }
        //if not, click the NEXT button to navigate to the next month
        await page.locator('[title="Next"]').click()
    }

    //Step:5 select the target date from the calender
   //  await page.locator(`.ui-datepicker-calendar a.ui-state-default:text-is("${targetDate}")`).click()

    const dates = await page.locator('//td[@data-handler="selectDay"]').elementHandles();

    for (const dateElement of  dates)
    {
        const day = (await dateElement.textContent()).trim();

        if(day===targetDate)
        {
            await dateElement.click()
            break;
        }
    }

   await page.waitForTimeout(5000)
   

})

test.skip('DatePicker Dropdown', async ({ page }) => {

    //Step1: open url
    await page.goto("file:///Users/Playwrite/DemoHTMLDocs/iIframePractics/Datepicker.html")

    // await page.locator('#datepicker').fill('02/21/2027')

    //select date using dropdown option
    //step2: define target date
    const targetYear = "2027"
    const targetMonth = "Mar"
    const targetDate = "25"

    //step3: click on date picker
    await page.locator('#datepicker').click()

    //step4: wait until the calender is visible to ensure stability
    const calender = page.locator('.ui-datepicker')
    await expect(calender).toBeVisible();

    //step5: select the target month from the dropdown
    await page.selectOption('.ui-datepicker-month', { label: targetMonth })


    //step6: select the target year from the dropdown
    await page.selectOption('.ui-datepicker-year', { label: targetYear })

    //step7: click on the required date from the calender
    await page.locator(`.ui-datepicker-calendar a.ui-state-default:text-is("${targetDate}")`).click()

    //step8: Assert that the final value in input field matches the selected date
    await expect(page.locator('#datepicker')).toHaveValue('03/25/2027')


    await page.waitForTimeout(5000) //for demo only
})



     