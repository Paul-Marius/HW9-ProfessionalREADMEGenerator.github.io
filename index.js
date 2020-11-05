const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title for your project(app)?",
        name: "Title",
    },
    {
        type: "input",
        message: "Please give short description of your project(app).",
        name: "Description",
    },
    {
        type: "input",
        
        message: "Describe the steps required to run this project(app).",
        name: "Installation",
      },
      {
        type: "input",
        message: "What is this project(app) used for?",
        name: "Usage",
      },
    {
        type: "input",
        message: "Please select a license for this README.",
        name: "License",
        choices: [
            "Apache",
            "MIT",
            "GNU GPLv3"
        ]
    },
    {
        type: "input",
        message: "How other developers can contribute at this project(app)",
        name: "Contribution",
      },
      {
        type: "input",
        message: "What command do you use to test(run) this project(app)?",
        name: "Test",
      },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "UserName",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "Email",
    },
];

// function to write README file
function writeToFile(fileName, data) {

    // fs.writeFile(fileName, data, err =>)
    fs.writeFile(fileName, data, function (err) {

        if (err) {
            return console.log(err);
        }
        console.log("Success ! Your file has been  generated")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (data) {

            writeToFile("ProfessionalREADMEGenerator.md", generateMarkdown(data));

            // const response = generateMarkdown(data);
            // writeToFile("ProfessionalREADMEGenerator.md", response);
            
        })
}

// function call to initialize program
init();
