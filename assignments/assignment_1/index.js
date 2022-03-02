function getNameFromCommandLine() {
    const data = process.argv;
    const name = data[data.length - 1];
    return name;
}

    // Write you code here, name should be taken as args in process.argv


function getNameFromEnv() {
    process.env.firstname = "Yash";
    return process.env.firstname;
    // Write your code here
}

function getNameFromReadLine() {
    const readline = require("readline");
    const rlInput = readline.createInterface({ input: stdin, output: stdout });
    rlInput.question("What is your Name?", (ans) => {
        return ans;
    });
    // Write your code here
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}