const {navigateToURL} = require('../tools/navigation.js');

async function navigationNode(state){
    console.log("[NODE] Navigating to the URL");
    await navigateToURL(state.page, state.url);
    state.status = "URL_Navigated";
    return state;
}

module.exports = {
    navigationNode
}