import {test, expect } from "@playwright/test";
import { clear } from "console";

test('Mouse Actions', async({page})=>{

await page.goto("https://the-internet.herokuapp.com/hovers")
    //hover () : moves mouse over the element (mouse over action)

await  page.locator('.figure').nth(1).hover()
 // verify name:user1
    // text selector - it locates element by the visible text on the page
 await expect(page.locator('text=name: user2')).toBeVisible()
//
 await page.waitForTimeout(2000)

})