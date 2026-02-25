(function(){
    'use strict';
    console.log('reading js');

    // Thumbnails
    const hotSpringBtn = document.querySelector('#hotspring_thumb');
    const lakeBtn = document.querySelector('#lake_thumb');
    const waterfallBtn = document.querySelector('#waterfall_thumb');
    const forestBtn = document.querySelector('#forest_thumb');
    const springBtn = document.querySelector('#spring_thumb');

    // Background
    const hotSpring = document.querySelector('#hot');
    const lake = document.querySelector('#lake');
    const waterfall = document.querySelector('#waterfall');
    const forest = document.querySelector('#forest');
    const spring = document.querySelector('#spring');
    const map = document.querySelector('#map');

    // Close button
    const closeBtn = document.querySelector('#close');

    // Select Article Elements
    const article = document.querySelector('article');
    const heading = document.querySelector('article h1')
    const haiku = document.querySelector('#message');


    // Change Background
    hotSpringBtn.addEventListener('click', function(event){
        event.preventDefault();
        map.className = 'hidden';
        heading.innerHTML = 'Hot Spring Pool';
        haiku.innerHTML = "The heated water<br>Envelops body and mind<br>A comforting fog"
        hotSpring.className = 'showing hotAnimate'
        // hotSpring.style.animation = 'hotAnimation 3s'
        closeBtn.removeAttribute('class');
    });

    lakeBtn.addEventListener('click', function(event){
        event.preventDefault();
        map.className = 'hidden';
        heading.innerHTML = 'Burnside Lake';
        haiku.innerHTML = "A strenous hike<br>Staggered upward for ages<br>And there are cars here"
        lake.className = 'showing lakeAnimate'
        // lake.style.animation = 'lakeAnimation 3s'
        closeBtn.removeAttribute('class');
    });

    waterfallBtn.addEventListener('click', function(event){
        event.preventDefault();
        map.className = 'hidden';
        heading.innerHTML = 'Waterfall';
        haiku.innerHTML = "The crashing cascade<br>Heard across the silent wood<br>Gives life to the earth"
        waterfall.className = 'showing waterfallAnimate'
        // waterfall.style.animation = 'waterfallAnimation 2s'
        closeBtn.removeAttribute('class');
    });
    
    forestBtn.addEventListener('click', function(event){
        event.preventDefault();
        map.className = 'hidden';
        heading.innerHTML = 'Burnt Forest';
        haiku.innerHTML = "Tree trunks scorched pitch black<br>I put forth my hand to touch<br>Became smudged with soot"
        forest.className = 'showing forestAnimate'
        // forest.style.animation = 'forestAnimation 2s'
        closeBtn.removeAttribute('class');
    });

    springBtn.addEventListener('click', function(event){
        event.preventDefault();
        map.className = 'hidden';
        heading.innerHTML = 'Secret Spring';
        haiku.innerHTML = "A hidden treasure<br>Swim up to the waterfall<br>For frigid showers"
        spring.className = 'showing springAnimate'
        // spring.style.animation = 'springAnimation 3s ease'
        closeBtn.removeAttribute('class');
    });


    // Close Background
    closeBtn.addEventListener('click', function(event){
        event.preventDefault();
        closeBtn.className = 'hidden';
        document.querySelector('.showing').className = 'hidden'
        heading.innerHTML = 'Grover Hot Springs State Park';
        haiku.innerHTML = "Click on a location to feel my experience."
        map.className = 'showing';
    })

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            event.preventDefault();
            closeBtn.className = 'hidden';
            document.querySelector('.showing').className = 'hidden'
            heading.innerHTML = 'Grover Hot Springs State Park';
            haiku.innerHTML = "Click on a location to feel my experience."
            map.className = 'showing';
        }
    })

    
}());