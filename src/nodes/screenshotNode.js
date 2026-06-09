const {takeScreenshot} = require("../tools/screenshot")

async function screenshotNode(state){
    console.log("[NODE] Taking screenshot");

    try{
        await takeScreenshot(state.page, "Final_Page.png");
        console.log("[SUCCESS] Screenshot taken successfully");
        state.status = "SCREENSHOT_TAKEN";
    }catch(error){
        console.log("[ERROR] Failed to take screenshot", error);
        state.status = "SCREENSHOT_FAILED";
    }

    return state;
}

module.exports = { screenshotNode }