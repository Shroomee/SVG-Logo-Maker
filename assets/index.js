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
        message: 'What is the text for your logo?',
    }
]

//prompt user for input
promptQuestions = (questions) => {
    return inquirer.prompt(questions);
}
//generate logo function
const init = () => {
    
}
//write file function
const writeToFile = (fileName, content) => {
    fs.writefile(fileName, content, err => {
        if (err) {
            console.log(err);
        }
        console.log('File created!');
    }
)}


//init function

init();