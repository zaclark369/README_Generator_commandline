// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    'Artistic': '![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)',
    'Creative Commons': '![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)',
    'GNU GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)',
    'MIT': '![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)',
    'Mozilla': '![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)'
  };

  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'Artistic': '[Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)',
    'Creative Commons': '[Creative Commons License](https://creativecommons.org/publicdomain/zero/1.0/)',
    'GNU GPLv3': '[GNU GPLv3 General Public License](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT': '[MIT License](https://choosealicense.com/licenses/mit/)',
    'Mozilla': '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)'
  }

  return licenseLink[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ______
  Licensed under ${renderLicenseLink(license)}

  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.license !== 'none' ? renderLicenseBadge(data.license) : ''}
  ## Description:
  ___
  ${data.description}
  ## Table of Contents:
  ___
  1) [Description](#description)
  2) [Install](#installation)
  3) [Usage](#usage)
  4) [Video](#video)
  5) [Collaboration](#collaboration)
  6) [Tests](#tests)
  7) [Questions?](#questions?)
  8) [GitHub](#gitHub)
  ${data.license !== 'none' ? `9) [License](#license)` : ''}
  ## Installation
  ___
  ${data.installation}
  ## Usage
  ___
  ${data.usage}
  ## Video
  ___
  [![Demo Video](${data.image})](${data.video} "Demo Video")
  ## Collaboration:
  ___
  ${data.collaboration}
  ## Tests
  ___
  ${data.tests}
  ## Questions?
  ___
  Please contact me at:
  My [GitHub](https://github.com/${data.githubId})
  
  Or Email:
  <${data.email}>
  
  ${data.license !== 'none' 
  ? renderLicenseSection(data.license) 
  : ''}
`;
}

module.exports = generateMarkdown;
