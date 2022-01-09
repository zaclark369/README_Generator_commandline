// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./src/generateMarkdown");
// what should this const be?

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description for the project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation information",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usages of your project",
  },
  {
    type: "input",
    name: "contribution",
    message: "How should someone collaborate with the project?",
    default: `If you would like to help, please follow the [Contributor Covenant](https://www.contributor-covenant.org/)`,
  },
  {
    type: "input",
    name: "test",
    message: "Enter the test methods for your project",
    default: "N/A",
  },
  {
    type: "input",
    name: "video",
    message: "Enter the path for the usage video of your project",
  },
  {
    type: "input",
    name: "image",
    message: "Enter the path for the image of your video",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the email address for this project: ",
  },
  {
    type: "list",
    name: "license",
    message: "Enter the license for your project: ",
    choices: [
      "Artistic",
      "Creative Commons",
      "GNU GPLv3",
      "MIT",
      "Mozilla",
      "none",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, generateMarkdown(data), (err) =>
    console.log(err)
  );
}

// module.exports = writeToFile;

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    writeToFile("README.md", {...answers});
  });
}

// Function call to initialize app
init();
