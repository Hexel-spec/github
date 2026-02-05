(function(){

    'use strict';
    console.log('reading js');

    const evidence = document.querySelector('#evidence-list');
    const summary = document.querySelector('#summary');
    const choose = document.querySelector('#choose-suspect');
    const closed = document.querySelector('#case-closed')

    const notebook = document.querySelector('#notebookForm');
    const summaryBtn = document.querySelector('#summaryBtn')
    const accuse = document.querySelector('#accuse');
    const restart = document.querySelector('#restart');


    // Evidence List >>> Summary
    notebook.addEventListener('submit', function(event){
        event.preventDefault();

        let myText;

        const location = document.querySelector('#location').value;
        const name = document.querySelector('#name').value;
        const cod = document.querySelector('#cod').value;
        const time = document.querySelector('#time').value;
        const weapon = document.querySelector('#weapon').value;
        const color = document.querySelector('#color').value;

        const opening = document.querySelector('#opening');
        const selectLocation = 'Please enter a location in order to continue.';
        const selectName = 'Please enter a name in order to continue.';
        const selectCod = 'Please enter a verb in past tense in order to continue.';
        const selectTime = 'Please enter a time to continue (e.g. clock time, part of day).';
        const selectWeapon = 'Please enter an object in order to continue.';
        const selectColor = 'Please select a color from the options in order to continue.';
        const normalMsg = ' Fill in the entries on the right, then press "Continue" to start the story!'

        if (location === ''){
            opening.innerHTML = selectLocation;
            document.querySelector('#location').focus();   
        } else if (name === '') {
            opening.innerHTML = selectName;
            document.querySelector('#name').focus();
        } else if (cod === '') {
            opening.innerHTML = selectCod;
            document.querySelector('#cod').focus();
        } else if (time === '') {
            opening.innerHTML = selectTime;
            document.querySelector('#time').focus();
        } else if (weapon === '') {
            opening.innerHTML = selectWeapon;
            document.querySelector('#weapon').focus();
        } else if (color === '---') {
            opening.innerHTML = selectColor;
            document.querySelector('#color').focus();
        } else {
            myText = `Today, a body was discovered in <strong>${location}</strong>. The sorry corpse was identified as <strong>${name}</strong>. According to the autopsy report, the victim was brutally <strong>${cod}</strong> to death around <strong>${time}</strong>. While it’s not certain, the culprit most likely used the <strong>${weapon}</strong> found at the scene to do the devilish deed. While snooping around, you also found a ripped <strong>${color}</strong> scrap laying around inconspicuously.`;

            const madlib = document.querySelector('#madlib');
            madlib.innerHTML = myText;

            evidence.className = 'hidden';
            summary.removeAttribute('class');

            opening.innerHTML = normalMsg;
        }

        

            

        
    });

    // Summary >>> Choose
    summaryBtn.addEventListener('click', function(event){
        summary.className = 'hidden';
        choose.removeAttribute('class');
    });

    // Choose >>> Closed
    accuse.addEventListener('submit', function(event){
        event.preventDefault();

        choose.className = 'hidden';
        closed.removeAttribute('class');
    });

    // Closed >>> Evidence List
    restart.addEventListener('click', function(event){
        
        const textFields = document.querySelectorAll('input[type=text]')
        // loop through all inputs to reset them to an empty string
        for (let i = 0; i < textFields.length; i++) {
            textFields[i].value = '';
        }

        const selectList = document.querySelector('#color');
        selectList.value = '---';

        const radioBtns = document.querySelectorAll('input[type=radio]')
        for (let i = 0; i < radioBtns.length; i++) {
            radioBtns[i].checked = false;
        }

        closed.className = 'hidden';
        evidence.removeAttribute('class');
    });


}());