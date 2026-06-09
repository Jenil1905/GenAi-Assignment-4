const state = require('./state/agentState.js');
const {agentGraph} = require('./graph/agentGraph.js');

async function main(){
    try{
        const result = await agentGraph.invoke(state);
        console.log('\nFinal Status: ', result.status)
    }catch(error){
        console.log("[FATAL ERROR]", error)
    }
}

main()