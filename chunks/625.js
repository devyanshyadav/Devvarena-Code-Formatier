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