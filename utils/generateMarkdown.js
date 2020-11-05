const Choices = require("inquirer/lib/objects/choices");

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # Title: ${data.Title}

  # Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contribution)

* [Tests](#tests)

* [Questions](#questions)

# Description: 
-> ${data.Description}

  # Installation
${data.Installation}

  # Usage
${data.Usage}

  # Contributing
${data.Contribution}

  # Tests
${data.Test}

# License

For more information about license, click on the link below.
![license](https://img.shields.io/badge/license-${data.License}-blue.svg)

# Questions

For questions about the ProfessionalREADMEGenerator you can falow my GitHub page: 
(https://github.com/${data.UserName}/${data.Title}.github.io)

For additional questions please contact me at: ${data.Email}
`;
}

module.exports = generateMarkdown;
