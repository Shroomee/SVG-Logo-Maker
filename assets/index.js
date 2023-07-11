// require npms
const fs = require('fs');
const inquirer = require('inquirer');

//deconstructing objects
const { Circle, Square, Triangle } = require('./lib/shapes');

//questions for user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'enter at most 3 characters for your shape: ',
        validate: (text) => {
            if (text.length > 3) {
                return 'too many characters';
            } else if (text.length < 3) {
                return 'too few characters';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'enter a color for your text: ',

    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'enter a color for your shape: ',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'choose a shape: ',
        choices: ['Circle', 'Square', 'Triangle']
    },
]

function generateLogo (text, textColor, shapeColor, shape) {
    if (shape == 'Circle') {
        var newShape = new Circle(shapeColor);
    }
    if (shape == 'Square') {
        var newShape = new Square(shapeColor);
    }
    if (shape == 'Triangle') {
        var newShape = new Triangle(shapeColor);
    }

const logo = `
<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="LOGO" style="background-color:white">
${newShape.render()}
<text x="108" y="120" font-size="50" fill="${textColor}">${text}</text>
`

    //write new object to file
    fs.writeFile('./tests/logo.svg', logo, (err) => {
        if (err) throw err;
        console.log('file saved');
    }
    )
}

//prompt user for input
inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        //create new object based on user input
        generateLogo(answers.text, answers.textColor, answers.shapeColor, answers.shape);
    })
    .catch((err) => {
        console.log(err);
    }
    )
