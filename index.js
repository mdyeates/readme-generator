const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
function questions() {
  inquirer
    .prompt([
      {
        default: "John Doe",
        name: "full_name",
        message: "1) Enter your first and last name:",
      },
      {
        default: "john.doe@gmail.com",
        name: "email",
        message: "2) Enter your email address:",
        validate: (email) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ? true : "Please enter a valid email address",
      },
      {
        default: "johndoe",
        name: "github_username",
        message: "3) Enter your GitHub username:",
      },
      {
        default: "johndoe",
        name: "linkedin_username",
        message: "4) Enter your LinkedIn username:",
      },
      {
        default: "my-project",
        name: "repo_name",
        message: "5) Enter the name of your GitHub repository:",
      },
      {
        default: "My Cool Project",
        name: "title",
        message: "6) Enter the title of your project:",
      },
      {
        default:
          "Experience the pinnacle of technology at your fingertips, as we empower you to effortlessly tackle every task and exceed all expectations, elevating your life to new heights of efficiency, convenience and brilliance.",
        name: "tagline",
        message: "7) Provide a short and catchy tagline:",
      },
      {
        default:
          "Our application is designed to simplify and streamline your daily routine. With its user-friendly interface and cutting-edge technology, it offers a comprehensive set of features to enhance your productivity, organisation, and overall experience. Whether it's managing your schedule, organising your tasks, or connecting with loved ones, our application has you covered. It's available on multiple platforms and devices, so you can take it with you wherever you go. See the difference it makes in your life.",
        name: "description",
        message: "8) Provide a detailed description of your project:",
      },
      {
        type: "checkbox",
        name: "technologies",
        message: "9) Select all technologies used in your project:",
        choices: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "jQuery",
          "Node.js",
          "React",
          "Express.js",
          "Bootstrap",
          "Tailwind-CSS",
          "Sass",
          "MongoDB",
          "Netlify",
          "Heroku",
          "PHP",
          "Vue.js",
          "Django",
          "Laravel",
          "MySQL",
        ],
        validate: (answer) => (answer.length === 0 ? "Please select at least one technology" : true),
      },
      {
        default: "N/A",
        name: "tests",
        message: "10) Provide information on how to run tests for your project:",
      },
      {
        default: ["https://jquery.com/", "https://getbootstrap.com/"],
        name: "credits",
        message: "11) Paste in the website URL's that you wish to acknowledge for their contributions to your project:",
      },
      {
        type: "list",
        name: "license",
        message: "12) Finally, select a license for your project:",
        choices: ["MIT", "Apache", "GNU GPLv3"],
      },
    ])
    .then((responses) => {
      writeToFile("README.md", generateMarkdown(responses));
    });
}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log(`${fileName} created successfully`)));
}

// function to initialize program
function init() {
  questions();
}

// function call to initialize program
init();
