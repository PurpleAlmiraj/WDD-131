const themeSelector = document.getElementById('theme-select');

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    const selectedTheme = themeSelector.value;
    const body = document.body;
    const logo = document.querySelector('.logo');


    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'images/byui-logo_white.png';
        logo.alt = 'byui-logo_white'; 
    } else {
        body.classList.remove('dark');
        logo.src = 'images/byui-logo_blue.webp';
        logo.alt = 'byui-logo_blue'; 
    }
}
