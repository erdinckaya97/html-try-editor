function updatePreview() {
    var htmlInput = document.getElementById('html-input');
    var preview = document.getElementById('preview');
    preview.innerHTML = htmlInput.value;
}

function toggleTheme() {
    var themeStyle = document.getElementById('theme-style');
    var themeButton = document.getElementById('theme-button');
    if (themeStyle.innerHTML.includes('#f0f0f0')) {
        themeStyle.innerHTML = `
            /* Dark theme styles here */
        `;
        themeButton.innerHTML = 'Aydınlık Tema';
    } else {
        themeStyle.innerHTML = `
            /* Light theme styles here */
        `;
        themeButton.innerHTML = 'Karanlık Tema';
    }
}
