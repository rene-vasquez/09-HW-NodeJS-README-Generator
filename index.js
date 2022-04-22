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
      type: 'list',
      name: 'license',
      message: 'Enter the type of license.',
      choices: ['Apache','MIT', 'Creative Commons']
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
`
# ${title}
## What does this code do?

${description}

## Table of Contents

${toc}

## How to install this app

${installation}

## How to use this app

${usage}

## License Type

${license}

## Contributions

${contributions}

## Testing Instructions

${testing}
`
;

const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully generated README.md'))
        .catch((err) => console.error(err));
};

init();