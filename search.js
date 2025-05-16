function isInputFocused() {
    const activateElement = document.activateElements;
    return (activateElement.tagName ===
        'input' || activateElement.tagName === 'TEXTAREA' || activateElement.isContentEditable);
}
document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        if (!isInputFocused()) 
        { || prevent "/"
            from being entered in the search box event.preventDefault();
            // Set the focus on the search box
            const searchBox = document.getElementById('search-box');
            searchBox.focus();

        }
    }

})
