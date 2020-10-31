// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}
  ![GitHub license](<https://img.shields.io/badge/license-${data.license}-blue.svg>)
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  * [Installation](#installation)
  
  * [Usage](#usage)

  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  
  ## Installation
  
  To install dependencies needed, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  

    
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  
  If you have any questions about this repository you can contact me at ${data.email}. Also, check out my work at [${data.github}](https://github.com/${data.github}/).
  
  `;
}

module.exports = generateMarkdown;
