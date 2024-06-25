// accessibility.js

// High Contrast Mode
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Font Size Adjustment
let currentFontSize = 1;

function increaseFontSize() {
    currentFontSize += 0.1;
    document.body.style.fontSize = currentFontSize + 'em';
}

function decreaseFontSize() {
    if (currentFontSize > 0.5) {
        currentFontSize -= 0.1;
        document.body.style.fontSize = currentFontSize + 'em';
    }
}

function resetFontSize() {
    currentFontSize = 1;
    document.body.style.fontSize = '1em';
}
