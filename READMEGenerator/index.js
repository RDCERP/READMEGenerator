// Required packages needed for this application
const fs = require('fs');                                                   // File System
const inquirer = require('inquirer');                                       // Inquirer
const generateMarkdown = require('./utils/generateMarkdown.js');            // Generate Markdown

// An array of questions for user input
const questions = [                                                                                 // Array of questions
    {
        type: 'input',                                                                              // Input type                 
        name: 'title',                                                                              // Name of question    
        message: 'Welcome to my README generator! Please provide your README Title',                // Message to user
        validate: titleInput => {                                                                   // Validate user input  
            if (titleInput) {                                                                       // If user input is true    
                return true;
            } else {
                console.log('Please enter your README title');                                      // Message to user if they forget to enter a title
                return false;
            }
        }
    },
    {
        type: 'input',                                                                              // Description
        name: 'description',
        message: 'Please give a desciption of your project',
    },
    {
        type: 'input',                                                                              // Installation
        name: 'installation',
        message: 'Please provide installation instructions',
    },
    {
        type: 'input',                                                                              // Usage
        name: 'usage',
        message: 'Please provide usage information',
    },
    {
        //Create a list of choices for license
        type: 'list',                                                                               // List type
        name: 'license',                                                                            // Name of object
        message: 'Please select a license',                                                         // Message to user
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],                                           // Choices for user
    },

    {
        type: 'input',                                                                              // Input type
        name: 'contributing',
        message: 'Please provide contribution guidelines',
    },
    {
        type: 'input',                                                                              
        name: 'tests',
        message: 'Please provide test instructions',
    },
    {
        type: 'input',                                                                              
        name: 'username',
        message: 'Please provide your GitHub username',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username');
                return false;
            }
        }
    },
    {
        type: 'input',                                                                              
        name: 'email',
        message: 'Please provide your email address',
    },
];


// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, "utf8", err => {
        console.log(err);
    });
    };


// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            writeToFile('README.md', generateMarkdown(data));
            console.log(data);
            // generateMarkdown(data);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }     
        });
}
// Function call to initialize app;
init()