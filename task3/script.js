
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');


let currentValue = '';
let operator = '';
let previousValue = '';

function updateDisplay(value) {
    display.textContent = value;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (button.classList.contains('operator')) {
            
            if (currentValue && previousValue) {
                calculate();
            }
            operator = value;
            previousValue =currentValue;
            currentValue = '';
        } else if (button.id === 'equals') {
           
            calculate();
        } else if (button.id === 'clear') {
            
            currentValue = '';
            previousValue = '';
            operator = '';
            updateDisplay(0);
        } else {
            
            currentValue += value;
        }

        
        if (currentValue) updateDisplay(currentValue);
    });
});


function calculate() {
    let result;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    if (isNaN(num1) || isNaN(num2)) return;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    operator = '';
    previousValue = '';
    updateDisplay(currentValue);
}
