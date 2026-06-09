const {closeBrowser} = require('../tools/browser.js')

async function closeBrowserNode(state){
    console.log("[NODE] Closing browser");

    try{
        await closeBrowser(state.browser);
        console.log("[SUCCESS] Browser closed successfully");
        state.status = "BROWSER_CLOSED";
    }catch(error){
        console.log("[ERROR] Failed to close browser", error);
        state.status = "BROWSER_CLOSE_FAILED";
    }

    return state;
}

module.exports = { closeBrowserNode }