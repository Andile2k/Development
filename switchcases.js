//Simple calculator using JS and Switchcase

//we need this library module to accept user input
const prompt = require('prompt-sync')();

let result;
//acceotthe operator input
const operator= prompt(' enter operator (either +, -, *, or /):');

//acceptan operator input
const num1= parseFloat(prompt('Enter the first number: '));
const num2= parseFloat(prompt('Enter the second number: '));

switch(operator) {
    //Formular for ddition
    case '+':
        result = num1 + num2;
        console.log(`${num1} + ${num2}=${result}`);
        break;
        //Formular for subtraction
        case '-':
        result = num1 - num2;
        console.log(`${num1} - ${num2}=${result}`);
        break; 
        //Formular for multiplication  
        case '*':
        result = num1 * num2;
        console.log(`${num1} * ${num2}=${result}`);
        break;
        //Formular for devision
        case '/':
        result = num1 / num2;
        console.log(`${num1} / ${num2}=${result}`);
        break;
        //Formular for exponentiation
        case '^':
        result = num1 ^ num2;
        console.log(`${num1} ^ ${num2}=${result}`);
        break;
}