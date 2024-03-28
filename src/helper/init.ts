//in order to prevent exception while we are running cucumeber to create folder 
//when we need to run cucumber and create step def -> sinippets
const fs = require("fs-extra");

async function setupDirectories() {
    try {
        await fs.ensureDir("test-results");
        await fs.emptyDir("test-results");
        console.log("Directory is ready and emptied.");
    } catch (error) {
        console.log("Folder not created or emptied! " + error);
    }
}

setupDirectories();