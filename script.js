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

