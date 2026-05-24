import { test, expect } from "@playwright/test";


test('Right-click Mouse Actions', async({page})=>{

await page.goto("https://the-internet.herokuapp.com/context_menu")

page.on('dialog', async(dialog)=>{

    console.log(dialog.message())

    expect(dialog.message()).toBe("You selected a context menu")

    await dialog.accept();

    await page.locator('#hot-spot').click({button:"right"});

    await page.waitForTimeout(2000)


})
})