const {browser, page, openBrowser, closeBrowser} = require('./tools/browser.js')
const {navigateToURL} = require('./tools/navigation.js')
const {takeScreenshot} = require('./tools/screenshot.js')

async function main(){
    const {browser, page} = await openBrowser();
    await navigateToURL( page,
    "https://ui.shadcn.com/docs/forms/react-hook-form");
    await takeScreenshot(page, "initial-page.png")
    await page.waitForTimeout(5000);
    await closeBrowser(browser);
}

main()