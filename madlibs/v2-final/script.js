(function(){

    'use strict';
    console.log('reading js');

    const notebook = document.querySelector('#notebook');

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
    });

}());