const state = {
    browser: null,
    page: null,
    url : "https://ui.shadcn.com/docs/forms/react-hook-form",
    usernameFound : false,
    descriptionFound: false,
    usernameLocator: null,
    descriptionLocator: null,
    usernameFilled: false,
    descriptionFilled: false,
    retries: 0,
    verificationErrors: [],
    status: ""
}

//this helps the agent to maintain the current state.  
//State stores info about the current progress of the agent.
//Every node reads and update the state to make decisions.

module.exports = state;