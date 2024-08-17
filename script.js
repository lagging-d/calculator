
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
        return result = add(parseInt(firstNum), parseInt(secondNum))
    } else if (operator == `-`) {
        return result = subtract(firstNum, secondNum) 
    } else if (operator == `*`) {
        return result = multiply(firstNum, secondNum)
    } else if (operator = `/`) {
        return result = divide(firstNum, secondNum) 
    } else if (operator = `/` && secondNum == `0`) {
        return result = `ZERO?`
    } else return result = `Operator doesn't exist`
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

let inputArray = [];
let inputHistory = [];

inputs.addEventListener(`click`, (event) => {
    inputHistory.push(event.target.className);
    let isOperatorInput = inputHistory.map((elem, index) => index !== inputHistory.indexOf(elem) && elem == `oper`)
    console.log(isOperatorInput);

    if (isOperatorInput.includes(true)) {
        event.stopImmediatePropagation();
        calculation();
    } else populate(event.target.textContent);
    
})

clearButton.addEventListener(`click`, () => {
    display.value = ``;
    displayText = ``;
})

let displayArr;

let calculation = () => {
    displayArr = displayText.split(``);
    console.log(displayArr);

    let index = displayArr.findIndex((item, ind) => {
        if (item == `+`
            || item == `-` && ind !== 0
            || item == `*`
            || item == `/`
        ) return item;
    });
    console.log(`Index: ${index}`);

    firstNum = displayArr.slice(0, index).join(``);
    secondNum = displayArr.slice(index + 1).join(``);
    console.log(`FirstNum: ${firstNum}`);
    console.log(`SecondNum: ${secondNum}`);
    operator = displayArr.slice(index, index + 1).join();
    console.log(`Operator: ${operator}`);

    operate(firstNum, secondNum, operator);
    display.value = result;
    displayText = result;

    inputHistory = [];
}

equals.addEventListener(`click`, calculation);

