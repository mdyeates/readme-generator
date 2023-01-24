const fs = require("fs");
const promptUser = require("./utils/promptUser");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log(`${fileName} created successfully`)));
}

// function to initialize program
function init() {
  console.log(
    "------------------------------------------------------------------------------------\nPlease enter your details to create a Professional README for your GitHub Repository\n------------------------------------------------------------------------------------"
  );
  promptUser().then((responses) => {
    writeToFile("README.md", generateMarkdown(responses));
  });
}

// function call to initialize program
init();
