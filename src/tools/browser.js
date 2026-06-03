//Responsibility: open browser and close browser
const {chromium} = require("playwright")

async function openBrowser() {
    try{
        console.log("[INFO] Opening browser...")
        const browser = await chromium.launch({
            headless: false
        });
        const page = await browser.newPage();
        console.log("[SUCCESS] Browser opened successfully")
        return {browser , page}
    }catch(error){
        console.log(`[ERROR] Failed to open browser: ${error.message}`)
        throw error;
    }
}

async function closeBrowser(browser){
try {
    console.log("[INFO] Closing browser...");

    await browser.close();

    console.log("[SUCCESS] Browser closed");
  } catch (error) {
    console.error("[ERROR] Failed to close browser:", error);

    throw error;
  }
}

module.exports = {
    openBrowser,
    closeBrowser
}