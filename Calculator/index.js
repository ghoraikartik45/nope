const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    updateFontSize();
}

function clearDisplay() {
    display.value = "";
    updateFontSize();
}

function calculate() {
    try {
        const result = eval(display.value);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid calculation result");
        }

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
    updateFontSize();
}

function updateFontSize() {
    const contentLength = display.value.length;
    const minFontSize = 2.5; // Minimum font size
    const maxFontSize = 5;   // Maximum font size

    // Adjust font size dynamically based on content length
    const fontSize = Math.max(minFontSize, Math.min(maxFontSize, 36/ contentLength));

    display.style.fontSize = `${fontSize}rem`;
}