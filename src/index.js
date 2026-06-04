const {browser, page, openBrowser, closeBrowser} = require('./tools/browser.js')
const {navigateToURL} = require('./tools/navigation.js')
const {takeScreenshot} = require('./tools/screenshot.js')
const {sendKeys} = require('./tools/action.js')

async function main(){
    //open browser
    const {browser, page} = await openBrowser();

    //navigate to url
    await navigateToURL( page,
    "https://ui.shadcn.com/docs/forms/react-hook-form");

    //take the screenshot
    await takeScreenshot(page, "before-fill.png")

    //find the name field
    const nameField = await page.getByLabel("Username");
    await nameField.waitFor({
        timeout: 5000
    })
    console.log("[SUCCESS] Found the name field");

    //fill the username field
    await sendKeys(nameField, "Jenil");

    //verify username field
    const usernameVal = await nameField.inputValue();
    console.log(`[INFO] Username value: ${usernameVal}`)
    

    //find the description field
    const descriptionField = await page.getByLabel("Description");
    await descriptionField.waitFor({
        timeout: 5000
    });
    console.log("[SUCCESS] Found the description field");

    //fill the description field
    await sendKeys(descriptionField, "Testing my own Browser Use");

    //verify description field
    const descriptionVal = await descriptionField.inputValue();
    console.log(`[INFO] Description value: ${descriptionVal}`)

    //take the screenshot after filling both fields
    await takeScreenshot(page, "after-fill.png")


    //keep the page for 5sec
    await page.waitForTimeout(5000);

    //close the browser
    await closeBrowser(browser);
}

main()