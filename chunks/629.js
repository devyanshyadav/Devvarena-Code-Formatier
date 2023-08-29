
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