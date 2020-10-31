//inquirer
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMd = require('./utils/generateMarkdown');

// array of questions for user

const questions = [
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
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
        writeToFile('MYREADME.md', generateMd(answers));
    })
}

// function call to initialize program
init();

//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions
 