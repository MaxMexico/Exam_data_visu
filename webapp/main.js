let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const resetButton = document.getElementById('reset-button');

function incrementCounter() {
    counter++;
    updateCounterValue();
}
function decrementCounter() {
    counter--;
    updateCounterValue();
}
function resetCounter() {
    counter = 0;
    updateCounterValue();
}

function updateCounterValue() {
    counterValue.innerHTML = counter;
}

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
resetButton.addEventListener('click', resetCounter);
