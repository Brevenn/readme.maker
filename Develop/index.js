// TODO: Include packages needed for this application
// Create const for requiring files
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
       message: 'Provide a title for your repository.',
       type: 'input',
       name: 'title' 
    }
]

inquirer.prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
