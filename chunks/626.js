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

