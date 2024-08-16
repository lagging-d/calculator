
// Calculation core

let add = (a, b) => {
    return a + b;
}

let subtract = (a, b) => {
    return a - b;
}

let multiply = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return a / b;
}

let firstNum;
let operator;
let secondNum; 

let operate = (firstNum, secondNum, operator) => {
    if (operator == `+`) {
        return add(firstNum, secondNum)
    } else if (operator == `-`) {
        return subtract(firstNum, secondNum) 
    } else if (operator == `*`) {
        return multiply(firstNum, secondNum)
    } else if (operator == `/`) {
        return divide(firstNum, secondNum)
    } else return `Operator doesn't exist`
}

// Calculation core -end-

let displayVal; 
const symbols = [`+`, `-`, `*`, `/`];

const display = document.querySelector(`#display`);
const inputs = document.querySelector(`.inputElements`);
const clearButton = document.querySelector(`#clear`);

let populate = (symbol) => {
    display.value += symbol;
}

inputs.addEventListener(`click`, (event) => {
    populate(event.target.textContent);
})

clearButton.addEventListener(`click`, () => {
    display.value = ``;
})