const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
function questions() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:",
      },
      {
        type: "input",
        name: "repoName",
        message: "Enter your GitHub repository name:",
      },
      {
        type: "input",
        name: "title",
        message: "Enter your Project Title:",
      },
      {
        type: "input",
        name: "shortDescription",
        message: "Provide a Short Description:",
      },
      {
        type: "input",
        name: "longDescription",
        message: "Provide a Longer Description:",
      },
      {
        type: "checkbox",
        name: "technologies",
        message: "Select all the technologies used in your project:",
        choices: ["jQuery", "Node.js", "React", "Bootstrap"],
      },
      {
        type: "input",
        name: "installation",
        message: "Provide step by step installation instructions:",
      },
      {
        type: "input",
        name: "credits",
        message: "List your collaborators:",
      },
      {
        type: "list",
        name: "license",
        message: "Select your license:",
        choices: ["MIT", "Apache", "None"],
      },
      {
        type: "input",
        name: "linkedInUsername",
        message: "Enter your LinkedIn username:",
      },
    ])
    .then((responses) => {
      writeToFile("README.md", generateMarkdown(responses));
    });
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Commit logged!")));
}

// function to initialize program
function init() {
  questions();
}

// function call to initialize program
init();
