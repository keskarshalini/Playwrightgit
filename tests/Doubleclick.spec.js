import{test,except, expect} from "@playwright/test"

test("Double click", async({page})=>{

    await page.goto("https://testpages.eviltester.com/pages/interaction/javascript-events/")

await page.locator('#ondoubleclick').dblclick()

await expect(page.locator('#ondoubleclickstatus')).toHaveText('Event Triggered')

await page.waitForTimeout(2000)
})