
import{test, expect} from '@playwright/test'

test('Drag And Drop',async({page})=>{

page.goto("https://testpages.eviltester.com/pages/interaction/drag-drop/")

await page.locator('#draggable1').dragTo(page.locator('#droppable1'))

await expect(page.locator('#droppable1 p')).toHaveText("Dropped!")
await page.waitForTimeout(2000)
})