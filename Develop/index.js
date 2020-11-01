const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMd = require('./utils/generateMarkdown');

// array of questions for user

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "What command would install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage instructions for this project?",
    },
    {
        type: "input",
        name: "contributing",
        message: "How can someone contribute to this repo?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run, to run tests?",
        default: "npm test"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    }

  ];
  

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile('generatedREADME.md', generateMd(answers));
    })
}

// function call to initialize program
init();
 