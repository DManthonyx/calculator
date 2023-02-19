// query dom for buttons
const numberButtons = document.querySelectorAll('.number-btn')
const arithmeticButtons = document.querySelectorAll('.arithmetic-btn');
const calculateButton = document.querySelector('.calculate-btn');
const clearButton = document.querySelector('.clear-btn');
const positiveNegativeButton = document.querySelector('.positive-negative-btn');

// set the initial problem to 0
let problem = 0;

// toggles negative/postitive numbers
function toggleNegativePositive() {
    const input = document.querySelector('input');
    if(input.value.charAt(0) === '-')  input.value = input.value.slice(1)
    if(input.value) input.value = `-${input.value}`
}

// clears the problem
function clearProblem() {
    const input = document.querySelector('input');
    input.value = null;
    problem = 0;
}

// concatenates numbers to the problem
function concatenateNumbers(e) {
    const input = document.querySelector('input');
    input.value = `${input.value}${e.target.innerText}`
}

// concatenates arithmetic operators to the problem
function concatenateArithmeticOperator(e) {
    const input =  document.querySelector('input');
    if(!input.value) return
    if(problem) {
        problem += ` ${input.value} ${e.target.innerText}`
    } else {
        problem = `${input.value} ${e.target.innerText}`
    }
    input.value = null;
}

function calculateProblem() {

}

// addEventListeners to the dom
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', concatenateNumbers)
})
arithmeticButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', concatenateArithmeticOperator)
})
clearButton.addEventListener('click', clearProblem)
positiveNegativeButton.addEventListener('click', toggleNegativePositive)