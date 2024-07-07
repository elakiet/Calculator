function addToExpression(value) {
    document.form1.answer.value += value;
}

function calculateResult() {
    try {
        document.form1.answer.value = eval(document.form1.answer.value);
    } catch (e) {
        document.form1.answer.value = 'Error';
    }
}

function clearExpression() {
    document.form1.answer.value = '';
}
function handlekeyup(form1) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.','C'];
    const key = key;
    if (key === 'Enter') {
        calculateResult();
    } else if (allowedKeys.includes(key)) {
        document.form1.answer.value += key;
    } else if (key === 'Backspace' || key === 'Delete') {
        document.form1.answer.value = document.form1.answer.value.slice(0, -1);
    }
}