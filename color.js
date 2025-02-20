function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function changeColor() {
    const colorDisplay = document.getElementById('colorDisplay');
    const newColor = getRandomColor();
    colorDisplay.style.backgroundColor = newColor;
}
document.getElementById('colorButton').addEventListener('click', changeColor);
