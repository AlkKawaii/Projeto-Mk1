const display = document.getElementById('calculus');
let lastAns = 0;

function adjustFontSize() {
    display.style.fontSize =
        Math.max(8 - Math.max(display.value.length - 8, 0) * 0.7325, 3) +
        'vmin';
}

function calcAppend(value) {
    display.value += value;
    adjustFontSize();
}

function clearDisplay() {
    display.value = '';
    adjustFontSize();
}

function backspace() {
    display.value = display.value.slice(0, -1);
    adjustFontSize();
}

function calc() {
    try {
        let expression = display.value;
        expression = expression.replace(/\^/g, '**');
        expression = expression.replace(/Ans/g, lastAns);
        expression = expression.replace(/π/g, 'Math.PI');
        expression = expression.replace(/√(\d+)|√(\(.+\))/g, 'Math.sqrt($1$2)');
        console.log(expression);

        const result = eval(expression);
        lastAns = result;
        if (result === undefined || result === null || isNaN(result)) {
            throw new Error('Erro');
        } else if (result === Infinity) {
            throw new Error('Divisão por zero');
        }
        display.value = result;
    } catch (error) {
        display.value = error.message.includes('zero')
            ? 'Não é possível dividir por zero'
            : 'Erro de sintaxe (provavelmente)';
        console.error(error);
        setTimeout(clearDisplay, 1500);
    } finally {
        adjustFontSize();
    }
}
