let htmlformatEditor;
let cssformatEditor;
let jsformatEditor;
let outputformatdiv = document.querySelector('#Outputformatdiv');


htmlformatEditor = ace.edit("htmlformatEditor");
htmlformatEditor.setTheme("ace/theme/default");
htmlformatEditor.session.setMode("ace/mode/html");
htmlformatEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    useWorker: false // Disable message and warning features
});

cssformatEditor = ace.edit("cssformatEditor");
cssformatEditor.setTheme("ace/theme/default");
cssformatEditor.session.setMode("ace/mode/css");
cssformatEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    useWorker: false // Disable message and warning features
});
jsformatEditor = ace.edit("jsformatEditor");
jsformatEditor.setTheme("ace/theme/default");
jsformatEditor.session.setMode("ace/mode/javascript");
jsformatEditor.setOptions({
    fontSize: "14px",
    showPrintMargin: false,
    useWorker: false // Disable message and warning features
});





let runHtmlformat = document.querySelector('.runHtmlformat')
let runCssformat = document.querySelector('.runCssformat')
let runJsformat = document.querySelector('.runJsformat')
let changeSection = document.querySelectorAll('#changeSection')
let htmlformatSection = document.querySelector('#htmlformatEditor')
let cssformatSection = document.querySelector('#cssformatEditor')
let jsformatSection = document.querySelector('#jsformatEditor')
let sectionTog = document.querySelectorAll('.sectionTog')
let notifyformat = document.querySelector('.notifyformat')




changeSection.forEach((elem) => {
    elem.addEventListener('click', () => {

        let commonSwitch = elem.textContent.toLowerCase();

        sectionTog.forEach(elem => elem.style.display = 'none')
        if (commonSwitch === 'html') {
            htmlformatSection.style.display = 'block';
            notifyformat.textContent = `Unminify Html`;





        } else if (commonSwitch === 'css') {
            cssformatSection.style.display = 'block';
            notifyformat.textContent = `Unminify Css`;


        } else if (commonSwitch === 'js') {
            jsformatSection.style.display = 'block';
            notifyformat.textContent = `Unminify Js`;



        }

    })

});

let runformat = document.querySelector('.runformat');

runformat.addEventListener('click', () => {

    if (htmlformatSection.style.display == 'block') {

        try {
            const formattedHtml = html_beautify(htmlformatEditor.getValue());
            outputformatdiv.value = formattedHtml;
        } catch (error) {
            outputformatdiv.value = 'Error during formatting: ' + error.message;
        }

    } else if (cssformatSection.style.display == 'block') {



        try {
            const formattedCss = cssformatEditor.getValue().replace(/;/g, ';\n').replace(/}/g, '}\n');
            outputformatdiv.value = formattedCss;
        } catch (err) {
            outputformatdiv.value = 'Error during formatting: ' + err.message;
        }

    } else if (jsformatSection.style.display == 'block') {

        try {
            const formattedJs = js_beautify(jsformatEditor.getValue());
            outputformatdiv.value = formattedJs;
        } catch (error) {
            outputformatdiv.value = 'Error during formatting: ' + error.message;
        }


    }
});


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