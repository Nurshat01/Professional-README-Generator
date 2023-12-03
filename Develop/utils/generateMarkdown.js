// Function to get the license badge
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function to get the license link
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function to get the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license}](https://opensource.org/licenses/${license}) License - see the [LICENSE.md](LICENSE.md) file for details.`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${licenseLink}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to contact me at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}).

${licenseSection}
`;
}

module.exports = generateMarkdown;
