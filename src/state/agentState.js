const state = {
    browser: null,
    page: null,
    url : "",
    nameFound : false,
    descriptionFound: false,
    retries: 0,
    status: ""
}

//this helps the agent to maintain the current state.  
//State stores info about the current progress of the agent.
//Every node reads and update the state to make decisions.