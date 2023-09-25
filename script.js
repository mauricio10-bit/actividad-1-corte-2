let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
        if (displayValue === Infinity || isNaN(displayValue)) {
            document.getElementById('display').value = 'No se puede dividir entre 0';
        } else {
            displayValue = eval(displayValue);
            document.getElementById('display').value = displayValue;
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }

}
