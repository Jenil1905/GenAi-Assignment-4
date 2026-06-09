const {StateGraph , START, END, Annotation} = require("@langchain/langgraph")
const {openBrowserNode} = require('../nodes/openBrowserNode.js');
const {navigationNode} = require('../nodes/navigationNode.js');
const {observeNode} = require('../nodes/observeNode.js');
const {fillFormNode} = require('../nodes/fillFormNode.js');
const {verificationNode} = require('../nodes/verificationNode.js');
const {screenshotNode} = require('../nodes/screenshotNode.js');
const {closeBrowserNode} = require('../nodes/closeBrowserNode.js');

const AgentState = Annotation.Root({

  browser: Annotation(),

  page: Annotation(),

  url: Annotation(),

  usernameFound: Annotation(),

  descriptionFound: Annotation(),

  usernameFilled: Annotation(),

  descriptionFilled: Annotation(),

  usernameLocator: Annotation(),

  descriptionLocator: Annotation(),

  retries: Annotation(),

  status: Annotation(),

  verificationErrors: Annotation()

});

//conditional edge function
function decideAfterObserve(state){
    if(state.usernameFound && state.descriptionFound){
        console.log('[DECISION] Proceeding to fill Form.')
        return "fillForm"
    }
    console.log('[DECISION] Element not found. Closing browser.')
    return "closeBrowser";
}

const graph = new StateGraph(AgentState);

//add nodes
graph.addNode('openBrowser', openBrowserNode);
graph.addNode('navigate', navigationNode);
graph.addNode('observe', observeNode);
graph.addNode('fillForm',fillFormNode);
graph.addNode('verify', verificationNode);
graph.addNode('screenshot', screenshotNode);
graph.addNode('closeBrowser', closeBrowserNode);

//add edges
graph.addEdge(START, 'openBrowser');
graph.addEdge('openBrowser', 'navigate');
graph.addEdge('navigate','observe');
graph.addConditionalEdges('observe', decideAfterObserve, {fillForm: 'fillForm', closeBrowser: 'closeBrowser'});
graph.addEdge('fillForm','verify');
graph.addEdge('verify','screenshot');
graph.addEdge('screenshot','closeBrowser');
graph.addEdge('closeBrowser', END);

//compile graph
const agentGraph = graph.compile();

module.exports = {agentGraph};

