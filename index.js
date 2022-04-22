const inquirer = require('inquirer');
const fs = require('fs');

// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project.',
    },
    {
      type: 'input',
      name: 'toc',
      message: 'Enter your table of contents.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter any installation instructions.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the type of license.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter any contribution information.',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter any testing instructions.',
    },
  ]);
};

const generateREADME = ({ title, description, toc, installation, usage, license, contributions, testing }) =>
''
;