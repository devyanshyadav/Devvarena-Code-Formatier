
let copiedformatText = document.querySelector('.copiedformatText');
let copiedformatButton = document.querySelector('.copiedformatButton')
//TO copy text from Clipboard

copiedformatButton.addEventListener('click', () => {
    var copyformatText = outputformatdiv;

    // Select the text field
    copyformatText.select();
    copyformatText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyformatText.value);

    // Alert the copied text
    copiedformatText.style.display = 'flex'

    setTimeout(() => {
        copiedformatText.style.display = 'none';
    }, 1000)
});

window.onload = function () {
    runHtmlformat.click();
}