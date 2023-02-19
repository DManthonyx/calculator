const numberButtons = document.querySelectorAll('.number-btn')
const addButton = document.querySelector('.add-btn');

let currentValue = 0;

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', function(e) {
        console.log(e.target, '<-- button')
        const input = document.querySelector('input');
        console.log(input.value, ' input value <--')
        input.value = `${input.value}${e.target.innerText}`
    })
})

addButton.addEventListener('click', function(e) {
    const input =  document.querySelector('input');
    currentValue = input.value
    input.value = null;
    console.log(currentValue, 'current')
})