(function(){
    'use strict';
    console.log('reading js');

    // ------------------ Open/Close Overlays ---------------------------

    // Thumbnails
    const hotSpringBtn = document.querySelector('#hotspring');
    const lakeBtn = document.querySelector('#lake');
    const waterfallBtn = document.querySelector('#waterfall');
    const forestBtn = document.querySelector('#forest');
    const springBtn = document.querySelector('#spring');

    // Overlays
    const hotSpringOverlay = document.querySelector('#ol-hotspring');
    const lakeOverlay = document.querySelector('#ol-lake');
    const waterfallOverlay = document.querySelector('#ol-waterfall');
    const forestOverlay = document.querySelector('#ol-forest');
    const springOverlay = document.querySelector('#ol-spring');

    // Close button
    const closeBtns = document.querySelectorAll('.close');




    // Open Overlays
    hotSpringBtn.addEventListener('click', function(event){
        event.preventDefault();
        hotSpringOverlay.className = 'overlay showing';
    });

    lakeBtn.addEventListener('click', function(event){
        event.preventDefault();
        lakeOverlay.className = 'overlay showing';
    });

    waterfallBtn.addEventListener('click', function(event){
        event.preventDefault();
        waterfallOverlay.className = 'overlay showing';
    });
    
    forestBtn.addEventListener('click', function(event){
        event.preventDefault();
        forestOverlay.className = 'overlay showing';
    });

    springBtn.addEventListener('click', function(event){
        event.preventDefault();
        springOverlay.className = 'overlay showing';
    });


    // Close Overlay
    for (const eachBtn of closeBtns) {
        eachBtn.addEventListener('click', function(event){
            event.preventDefault();
            document.querySelector('.showing').className = 'overlay hidden';
        })
    };

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape') {
            document.querySelector('.showing').className = 'overlay hidden'
        }
    });


    

    // ------------------------ Zoom Function ----------------------

    // const container = document.querySelector('#secretContainer');
    // const hotSpots = document.querySelectorAll('#secretContainer div');
    // const springImg = document.querySelector('#secretContainer img');

    // hotSpots.forEach(function (eachSpot) {
    //     eachSpot.addEventListener('mouseover', zoomPhoto)
    //     eachSpot.addEventListener('mouseout', function(){
    //         springImg.className = 'start';
    //     })
    // });

    // function zoomPhoto(event) {
    //     const thisCorner = event.target.id;
    //     console.log(thisCorner);
    //     switch (thisCorner) {
    //         case 'top': springImg.className = 'top'; break;
    //         case 'bottom': springImg.className = 'bottom'; break;
            
    //     }
    // }



}());