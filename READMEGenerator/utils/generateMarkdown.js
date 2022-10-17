// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== 'None') {                                                                   // If license is none return nothing 
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;     // If license is "X" render "X's" badge
  }
  return '';
}

// Function that returns the license link
function renderLicenseLink(license) {                                                     
  if (license === 'MIT') {                                                                    // If license is "X"
    return 'https://opensource.org/licenses/MIT';                                             // Return "X's" link   
  }
  if (license === 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  if (license === 'GPL') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  if (license === 'BSD') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  }
};

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License

This project is licensed under the ${license} license.

Please follow the link to find more information. 
`                                     
    );
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  * [Credits](#credits) 

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}

  ## Questions
  For more information you can reach out to me at ${data.email} 
  or you can find me on GitHub at https://github.com/${data.username}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
 
  ## Credits
  ${data.credits}

`;
}

// Export function
module.exports = generateMarkdown;
