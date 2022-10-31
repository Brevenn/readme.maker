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
    },
    {
        message: 'Provide the Contribution reqs for your repository.',
        type: 'input',
        name: 'contribution' 
    },
    {
        message: 'Provide the Testing reqs for your repository.',
        type: 'input',
        name: 'testing' 
    },
    {
        message: 'Provide your Github username for future contact.',
        type: 'input',
        name: 'github' 
    },
    {
        message: 'Provide your Email for future contact.',
        type: 'input',
        name: 'email' 
    }
]

// create a prompt for the questions to allow and correct user imput
inquirer.prompt(questions)
.then(answers =>{
    console.log(answers)
    let readMe = `<img src='https://img.shields.io/badge/${answers.license}-blue.svg'>

    <h1> Title </h1>
    
    <h2> Description </h2>
    
    <h2> Table of Contents </h2>
    
    <details open="open">
    <summary> Table of Contents </summary>
    <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contribution">Contribution</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
    </details>
    
    <h3 id="installation"> Installation </h3>
    <p> ${answers.installation} </p>
    
    <h3 id="usage"> Usage </h3>
    <p> ${answers.usage} </p>
    
    <h3 id="contribution"> Contribution </h3>
    <p> ${answers.contribution} </p>
    
    <h3 id="tests"> Tests </h3>
    <p> ${answers.tests} </p>
    
    <h3 id="questions"> Questions </h3>
    <p> Feel free to reach out to me at ${answers.email}. To see more of my work, checkout my Github: ${answers.github} </p>`

    fs.writeFile('newReadMe.md', readMe, err => console.log(err))
})
.catch(err => console.log(err))
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
