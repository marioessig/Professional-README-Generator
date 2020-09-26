// array of questions for user
const fs = require('fs')
const inquirer = require('inquirer')

const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = () => {
  return inquirer.prompt(
    [
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide an installation instruction.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information.'
      },
      {
        type: 'confirm',
        name: 'confirmScreenshots',
        message: 'Include a screenshot?'
      },
     
      {
        type: 'input',
        name: 'screenshots',
        message: 'Enter the screenshot url or filepath.',
        when: ({ confirmScreenshots }) => {
          if (confirmScreenshots) {
            return true
          } else {
            return false
          }
        }
      },
      {
      type: 'input',
        name: 'screenshotTitle',
        message: 'What is the screenshot title?',
        when: ({ confirmScreenshots }) => {
          if (confirmScreenshots) {
            return true
          } else {
            return false
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmLink',
        message: 'Include a link?'
      },
      {
        type: 'input',
          name: 'usageLink',
          message: 'Enter the link url.',
          when: ({ confirmLink }) => {
            if (confirmLink) {
              return true
            } else {
              return false
            }
          }
        },
        {
          type: 'input',
            name: 'linkTitle',
            message: 'What is the link title?',
            when: ({ confirmLink }) => {
              if (confirmLink) {
                return true
              } else {
                return false
              }
            }
          },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines.'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions for tests.'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license do you have?',
        choices: ['MIT', 'GNU', 'ISC', 'Apache license']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      },
    ])
}


// function to write README file
function writeToFile(data) {
  
  fs.writeFile(`./dist/README.md`, data, err => {
    if (err) {
      console.log(err)
    }
    console.log("success!");
    
  })
}

// function to initialize program
function init() {
  questions()
  .then(answers => 
     generateMarkdown(answers)
  )
  .then(markdown => 
    writeToFile(markdown)
  )
  .catch(err => {
    console.log(err);
  });
}

// function call to initialize program
init()