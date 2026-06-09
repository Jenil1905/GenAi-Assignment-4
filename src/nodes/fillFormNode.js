const { sendKeys } = require("../tools/action");

async function fillFormNode(state) {

    console.log("[NODE] Filling form");

    try {

        if (
            state.usernameFound &&
            state.descriptionFound
        ) {

            await sendKeys(
                state.usernameLocator,
                "Jenil"
            );

            await sendKeys(
                state.descriptionLocator,
                "Making my own Browser Use."
            );

            state.usernameFilled = true;
            state.descriptionFilled = true;

            state.status = "FORM_FILLED";

            console.log(
                "[SUCCESS] Form filled successfully"
            );

        } else {

            console.log(
                "[INFO] Required fields not found"
            );

            state.status = "FORM_FILL_SKIPPED";
        }

    } catch (error) {

        console.error(
            "[ERROR] Failed to fill form:",
            error
        );

        state.status = "FORM_FILL_FAILED";
    }

    return state;
}

module.exports = {fillFormNode};