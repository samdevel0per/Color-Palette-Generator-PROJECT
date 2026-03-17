const generateBtn = document.getElementById('generate-btn');
const palettesContainer = document.querySelector('.palette-container');

generateBtn.addEventListener("click", generatePalette);

palettesContainer.addEventListener("click", function(e) {

    // ✅ Copy button click
    if (e.target.classList.contains('copy-btn')) {
        const hexValue = e.target.previousElementSibling.textContent;

        navigator.clipboard.writeText(hexValue)
            .then(() => showCopySuccess(e.target))
            .catch(err => console.error(err));

    } 
    
    // ✅ Click on color box
    else if (e.target.classList.contains('color')) {
        const hexValue = e.target.nextElementSibling.querySelector('.hex-value').textContent;

        navigator.clipboard.writeText(hexValue)
            .then(() => {
                const btn = e.target.nextElementSibling.querySelector('.copy-btn');
                showCopySuccess(btn);
            })
            .catch(err => console.error(err));
    }
});



function showCopySuccess(copyBtn) {
    copyBtn.classList.remove("fa-copy");
    copyBtn.classList.add("fa-check");

    copyBtn.style.color = "green";

    setTimeout(() => {
        copyBtn.classList.remove("fa-check");
        copyBtn.classList.add("fa-copy");
        copyBtn.style.color = "";
    }, 1500);
}


function generatePalette() {
    const colors = [];

    for (let i = 0; i < 5; i++) {
        colors.push(generateRandomColor());
    }

    updatePaletteDisplay(colors);
}

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function updatePaletteDisplay(colors) {
    const colorBoxes = document.querySelectorAll('.color-box');

    colorBoxes.forEach((box, index) => {
        const colorDiv = box.querySelector('.color');
        const hexText = box.querySelector('.hex-value');

        colorDiv.style.backgroundColor = colors[index];
        hexText.textContent = colors[index];
    });
}
