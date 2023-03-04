const restultBox = document.getElementById('outputValue');
let input = '';

function addToInput(value) {
    input += value;
    restultBox.innerHTML = input;
}

function clearResult() {
    input = '';
    restultBox.innerHTML = '0';
}

function backspace() {
    input = input.slice(0, -1);
    restultBox.innerHTML = input;

    if(restultBox.innerHTML === '') { 
        restultBox.innerHTML = '0';
    }
}

function calculate() {
    try {
        const restultString = eval(input).toString();
        input = restultString;
        restultBox.innerHTML = input;
    } catch (error) {
        input = 'math error';
        restultBox.innerHTML = input;
    }
}