const display = document.getElementById('calculus');

function adjustSize() {
	const textLength = display.value.length;
    display.style.fontSize = `${64 - (textLength * 1)}px`
}

function calcAppend(value) {
	display.value += value;
    adjustSize()
}

function clearDisplay() {
	display.value = '';
    adjustSize()
}

function calc() {
	try {
		display.value = eval(display.value);
        adjustSize()
	} catch (error) {
		display.value = 'Error';
        adjustSize()
		setTimeout(clearDisplay, 1000);
	}
}
