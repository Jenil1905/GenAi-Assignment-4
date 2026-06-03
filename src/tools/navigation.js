//Responsibility: navigate to the given URL and scroll page

async function navigateToURL(page, url){
    try{
        console.log(`[INFO] Navigating to ${url}`);
        await page.goto(url, {
            waitUntil: "networkidle",
            timeout: 30000
        })

        //verify url and content
        const currURL = page.url();
        console.log(`[INFO] Current URL: ${currURL}`)
        if(!currURL.includes("react-hook-form")){
            throw new Error("Navigation verification failed")
        }
        const pageTitle = await page.title()
        console.log(`[INFO] Page Title: ${pageTitle}`)

        console.log("[SUCCESS] Page loaded...")
    }catch(error){
        console.log("[ERROR] Navigation failed", error.message)
        throw error;
    }
}

async function scrollDown(page){
    try{
        console.log("[INFO] Scrolling page")
        await page.mouse.wheel(0, 1000); // inside wheel those two num represents x axis and y axis.
        await page.waitForTimeout(1000);
        console.log("[SUCCESS] Page scrolled down")
    }catch(error){
        console.log("[ERROR] Scroll failed", error)
        throw error
    }
}

module.exports = {
    navigateToURL,
    scrollDown
}