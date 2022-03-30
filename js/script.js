const themeSwitch = document.querySelector('#themeSwitch')

themeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('light-mode')
})