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
