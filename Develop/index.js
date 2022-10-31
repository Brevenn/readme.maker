// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
       message: 'Provide a Title for your repository.',
       type: 'input',
       name: 'title' 
    },
    {
        message: 'Provide a Description for your repository.',
        type: 'input',
        name: 'description' 
    },
    {
        message: 'Provide the Installation requirements for your repository.',
        type: 'input',
        name: 'installation' 
    },
    {
        message: 'Provide the Usage info for your repository.',
        type: 'input',
        name: 'usage' 
    },
    {
        message: 'Provide the License for your repository.',
        type: 'list',
        choices: ['BSD 3', 'MIT', 'APACHE 2.0', 'FPA', 'GNU GPL 3.0'],
        name: 'license' 
    }
]

// create a prompt for the questions to allow and correct user imput
inquirer.prompt(questions)
.then(answers =>{
    console.log(answers)
})
.catch(err => console.log(err))
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
