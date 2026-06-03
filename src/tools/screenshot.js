//Responsibility: take screenshots of the page
const path = require("path");

async function takeScreenshot(page, fileName){
 try{
     console.log(`[INFO] Taking screenshot: ${fileName}`)
     const screenshotPath = path.join(
        process.cwd(),
        "screenshots",
        fileName
     )
     await page.screenshot({
        path : screenshotPath,
        fullPage: true
     })
     console.log(`[SUCCESS] Screenshot saved at: ${screenshotPath}`)
     return screenshotPath;

 }catch(error){
    console.log("[ERROR] Failed to take screenshots" , error.message)
    throw error;
 }

}

module.exports = {
    takeScreenshot
}
