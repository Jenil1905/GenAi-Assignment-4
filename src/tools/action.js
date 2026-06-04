// Responsibility: perform actions on the page such as clicking , typing etc.

async function sendKeys(locator, text){
    try{
        console.log(`[INFO] Typing text: ${text}`)
        await locator.fill(text);
        console.log("[SUCCESS] Text entered successfully...")
    }catch(error){
        console.log("[ERROR] Failed to enter text", error);
        throw error
    }
}

async function clickOnScreen(page, x, y){
    try{
        console.log(`[INFO] Clicking on screen at ${x}, ${y}`)
        await page.mouse.click(x,y);
        console.log('[SUCCESS] clicked successfully')
    }catch(error){
        console.log("[ERROR] Failed to click", error)
        throw error;
    }
}

async function doubleClick(page, x , y){
    try{
        console.log(`[INFO] Double clicking on screen at ${x}, ${y}`)
        await page.mouse.dblclick(x,y);
        console.log("[SUCCESS] Double clicked successfully");
    }catch(error){
        console.log("[ERROR] Failed to double click", error);
        throw error
    }
}

module.exports = {
    sendKeys,
    clickOnScreen,
    doubleClick
}