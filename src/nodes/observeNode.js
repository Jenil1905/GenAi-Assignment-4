async function observeNode(state) {
    console.log("[NODE] Observing page elements");

    try {
        const usernameField = state.page.getByLabel("Username");

        await usernameField.waitFor({
            timeout: 5000
        });

        state.usernameFound = true;
        state.usernameLocator = usernameField;

        console.log("[SUCCESS] Username field found");
    } catch (error) {
        state.usernameFound = false;

        console.log("[INFO] Username field not found", error);
    }

    try {
        const descriptionField = state.page.getByLabel("Description");

        await descriptionField.waitFor({
            timeout: 5000
        });

        state.descriptionFound = true;
        state.descriptionLocator = descriptionField;

        console.log("[SUCCESS] Description field found");
    } catch (error) {
        state.descriptionFound = false;

        console.log("[INFO] Description field not found", error);
    }

    state.status = "FIELDS_OBSERVED";

    return state;
}

module.exports = {observeNode}