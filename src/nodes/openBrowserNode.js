const {openBrowser} = require('../tools/browser.js');

async function openBrowserNode(state){
    console.log("[NODE] opening the browser");
    const {browser , page} = await openBrowser();
    state.browser = browser;
    state.page = page;
    state.status = "BROWSER_OPENED";
    return state;
}

module.exports ={
    openBrowserNode
}