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

        myText = `Today, a body was discovered in ${location}. The sorry corpse was identified as ${name}. According to the autopsy report, the victim was brutally ${cod} to death around ${time}. While it’s not certain, the culprit most likely used the ${weapon} found at the scene to do the devilish deed. While snooping around, you also found a ripped ${color} scrap laying around inconspicuously.`;

        const madlib = document.querySelector('#madlib');
        madlib.innerHTML = myText;

        evidence.className = 'hidden';
        summary.removeAttribute('class');
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
        closed.className = 'hidden';
        evidence.removeAttribute('class');
    });


}());