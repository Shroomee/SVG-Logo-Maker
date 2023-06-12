// require npms
const fs = require('fs');
const inquirer = require('inquirer');
//deconstructing objects
const {Circle, Square, Triangle} = require('./lib/shapes');

//questions for user
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'enter at most 3 characters for your shape: ',
        validate: (text) => {
            if (text.length > 3) {
                return 'too many characters';
            }else if (text.length < 3) {
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



//prompt user for input
inquirer.prompt(questions)
.then((answers) => {
    console.log(answers);
    //create new object based on user input
    if (answers.shape === 'Circle') {
        var newShape = new Circle(answers.text, answers.textColor, answers.shapeColor);
    }
    if (answers.shape === 'Square') {
        var newShape = new Square(answers.text, answers.textColor, answers.shapeColor);
    }
    if (answers.shape === 'Triangle') {
        var newShape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
    }
    //write new object to file
    fs.writeFile('logo.svg', newShape, (err) => {
        if (err) throw err;
        console.log('file saved');
    }
    )
})

    



