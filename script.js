
// Calculation core -start-

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

// Changing display -start-

let displayVal; 
let displayText;
const symbols = [`+`, `-`, `*`, `/`];

const display = document.querySelector(`#display`);
const inputs = document.querySelector(`.inputElements`);
const clearButton = document.querySelector(`#clear`);
const equals = document.querySelector(`#equals`);

let populate = (symbol) => {
    display.value += symbol;
    displayText = display.value;
}

inputs.addEventListener(`click`, (event) => {
    populate(event.target.textContent);
})

clearButton.addEventListener(`click`, () => {
    display.value = ``;
})

equals.addEventListener(`click`, () => {
    let displayArr = displayText.split(``);
    console.log(displayArr);

    let index = displayArr.findIndex((item) => {
        if (item == `+`
            || item == `-`
            || item == `*`
            || item == `/`
        ) return item;
    });
    console.log(index);

    firstNum = displayArr.slice(0, index).join();
    secondNum = displayArr.slice(index + 1).join();
    console.log(firstNum);
    console.log(secondNum);
    operator = displayArr.slice(index, index + 1).join();
    console.log(operator);
})