// function to generate markdown for README
const screenshotUrl = (title, screenshot) => {
  if (!screenshot) {
    return '';
  }

  return `![${title}](${screenshot})`
}

const getBadge = (license) => {
  return `![badgeMatch](https://img.shields.io/badge/license-${license}-green)`
}

const getLink = (linkTitle,link) => {
  if (!link) {
    return '';
  }

  return `[${linkTitle}](${link})`
}


function generateMarkdown(data) {
  return `
  # ${data.title}
  ${getBadge(data.license)}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage} 
  ${screenshotUrl(data.screenshotTitle, data.screenshots)}
  
  ${getLink(data.linkTitle, data.usageLink)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## License
  Licensed under the ${data.license} license

  ## Questions? 
  [Visit My GitHub](https://www.github.com/${data.github})

  or reach me with additional questions at ${data.email}
`;
}

module.exports = generateMarkdown;

