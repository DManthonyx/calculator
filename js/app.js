// query dom for buttons
const numberButtons = document.querySelectorAll('.number-btn')
const arithmeticButtons = document.querySelectorAll('.arithmetic-btn');
const calculateButton = document.querySelector('.calculate-btn');
const clearButton = document.querySelector('.clear-btn');
const positiveNegativeButton = document.querySelector('.positive-negative-btn');
const input = document.querySelector('input');
// set the initial problem to 0
let problem = 0;

// toggles negative/postitive numbers
function toggleNegativePositive() {
    const input = document.querySelector('input');
    if(input.value === '0') return
    if(input.value.charAt(0) === '-') {
        input.value = input.value.slice(1)
        return;
    }
    if(input.value.charAt(0) !== '-') {
        input.value = `-${input.value}`
        return
    }
}

// clears the problem
function clearProblem() {
    const input = document.querySelector('input');
    input.value = 0;
    problem = 0;
}

// concatenates numbers to the problem
function concatenateNumbers(e) {
    const input = document.querySelector('input');
    if(input.value === '0') {
        input.value = `${input.value.slice(1)}${e.target.innerText}`
    } else {
        input.value = `${input.value}${e.target.innerText}`
    }
}

// concatenates arithmetic operators to the problem
function concatenateArithmeticOperator(e) {
    const input =  document.querySelector('input');
    if(input.value === '0') return
    if(problem) {
        problem += ` ${input.value} ${e.target.innerText}`
    } else {
        problem = `${input.value} ${e.target.innerText}`
    }
    input.value = 0;
}

function calculateProblem() {
    let currentSum;
    let numOne;
    let numTwo;
    const input = document.querySelector('input').value;
    problem += ` ${input}`

    let currProblem = problem.split('');
    console.log(currProblem)
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
calculateButton.addEventListener('click', calculateProblem)



input.addEventListener('keydown', function(e) {
    const input = document.querySelector('input');
    let regex = new RegExp(/Digit*|Arrow*|Backspace/)
    if(!regex.test(e.code)) return e.preventDefault()
    if(input.value.charAt(0) === '0') input.value = input.value.slice(1);
})

input.addEventListener('keyup', function(e) {
    const input = document.querySelector('input');
    if(!input.value) input.value = 0
})