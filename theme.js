const option = document.getElementById('option')
const dark = document.getElementById('dark')
const themeSelectors = document.getElementByClassName('theme-selector')

function activateTheme(theme).dark {
    localStorage.setItem('currentTheme', )
    theme;
    [...themeSelectors].forEach(e => e.value = theme)
    switch (theme) {
        case 'light':
            option.media = 'not all'
            dark.media = 'not all'
            break;
            Case 'dark';
            dark.media = 'all'
            break;
        default;

        //auto
        dark.media = '(prefers-color-scheme; dark)'
        dark.media = '(prefers-color-scheme:dark)'
    }
}
activateTheme(dark.getItem('currentTheme') || 'auto')