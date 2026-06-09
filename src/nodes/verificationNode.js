async function verificationNode(state){
    console.log("[NODE] Starting verification");

    try{
        const usernameVal = await state.usernameLocator.inputValue()
        const descriptionVal = await state.descriptionLocator.inputValue()
        let verificationPassed = true;

        if(usernameVal!=="Jenil"){
            state.verificationErrors.push("Username does not match");
            verificationPassed = false;
            console.log(`[ERROR] Username does not match. Expected: Jenil, Found: ${usernameVal}`);
        }
        if(descriptionVal!=="Making my own Browser Use."){
            state.verificationErrors.push("Description does not match");
            verificationPassed = false;
            console.log(`[ERROR] Description does not match. Expected: Making my own Browser Use. Found: ${descriptionVal}`)
        }
        if(verificationPassed){
            console.log('[SUCCESS] Form values verified successfully.')
            state.status = "VERIFICATION_PASSED";
        }else{
            console.log("[ERROR] Some verification failed.")
            state.status = "VERIFICATION_FAILED";
            state.verificationErrors.forEach(err=>console.log(`	- ${err}`));
        }
    }catch(error){
        console.log("[ERROR] Failed to verify field values.", error)
        state.status = "VERIFICATION_FAILED";
    }

    return state;
}

module.exports = {
    verificationNode
}