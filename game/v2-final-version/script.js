(function(){
    'use strict';
    console.log('reading js');

    const form1 = document.querySelector('#player1form');
    const form2 = document.querySelector('#player2form');

    const icons = document.querySelectorAll('label img');

    const textbox = document.querySelector('#textbox')
    const overlay = document.querySelector('#overlay');

    const player1Divs = document.querySelectorAll('#side1 .cardselections div');
    const player2Divs = document.querySelectorAll('#side2 .cardselections div');

    const nextRound = document.querySelector('#nextround');
    const quitGame = document.querySelector('#quitgame');

    const popSound = new Audio('audio/pop_sound.mp3')
    const rockSound = new Audio('audio/rock_speak.mp3');
    const paperSound = new Audio('audio/paper_speak.mp3');
    const scissorsSound = new Audio('audio/scissors_speak.mp3');
    const wooshSound = new Audio('audio/woosh.mp3')

    let roundCounter = 1;
    let gameWin = 'false';

    const player1 = {
        name: 'Player 1',
        first: '',
        second: '',
        third: '',
        hp: 100
    }

    const player2 = {
        name: 'Player 2',
        first: '',
        second: '',
        third: '',
        hp: 100
    }

    
    overlay.removeAttribute('class');
    document.querySelector('#overlay button').addEventListener('click', function(){
        popSound.play();
        overlay.className = 'hidden'
    })

    // setTimeout(function(){overlay.className = 'hidden';}, 2000)

    icons.forEach(function(icon){
        icon.addEventListener('click', function(){
            popSound.play();
        })
    })

    form1.addEventListener('submit', function(event){
        event.preventDefault();

        let check = [];

        // Store checked options as variables
        const radios = document.querySelectorAll('#player1form input[type=radio]');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {;
                check.push(radios[i]);
            }
        }

        // Set player objects equal to form data
        player1.first = check[0].value;
        player1.second = check[1].value;
        player1.third = check[2].value;

        console.log(player1.first);
        console.log(player1.second);
        console.log(player1.third);

        popSound.play();
        form2.removeAttribute('class');
        form1.className = 'hidden';
    });

    form2.addEventListener('submit', function(event){
        event.preventDefault();

        let check = [];

        // Store checked options as variables
        const radios = document.querySelectorAll('#player2form input[type=radio]');
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {;
                check.push(radios[i]);
            }
        }

        // Set player objects equal to form data
        player2.first = check[0].value;
        player2.second = check[1].value;
        player2.third = check[2].value;

        console.log(player2.first);
        console.log(player2.second);
        console.log(player2.third);

        form2.className = 'hidden';

        wooshSound.play();
        playGame()
    });

    function playGame() {
        textbox.innerHTML = `<p>Round ${roundCounter} start!</p>`
        textbox.removeAttribute('class');
        overlay.innerHTML = '<h1>Game Start!</h1>'
        overlay.removeAttribute('class');
        setTimeout(function(){
            overlay.className = 'hidden';
            setTimeout( function(){
                textbox.innerHTML = "<p>Set One!</p>"
                whoWins(player1.first, player2.first, player1Divs[0], player2Divs[0])
                
                setTimeout(function(){
                    if (gameWin === 'false') {
                        textbox.innerHTML = "<p>Set Two!</p>"
                        whoWins(player1.second, player2.second, player1Divs[1], player2Divs[1])
                        
                            setTimeout(function(){
                                if (gameWin === 'false') {
                                    textbox.innerHTML = "<p>Set Three!</p>"
                                    whoWins(player1.third, player2.third, player1Divs[2], player2Divs[2])
                                    
                                        setTimeout(function(){
                                            if (gameWin === 'false') {
                                                nextRound.removeAttribute('class');
                                                quitGame.removeAttribute('class');
                                            }
                                            
                                        }, 5000) 
                                }
                                
                                
                                
                            }, 5000);
                            
                    }
                    
                    
                    
                }, 5000)
                
                                  
            }, 1000)
        }, 3000)
            
    }

    function whoWins(player1Choice, player2Choice, player1Div, player2Div) {

        setTimeout(function(){
            if (player1Choice === 'rock') {
                rockSound.play();
                player1Div.style.backgroundColor = 'whitesmoke';
                player1Div.innerHTML = '<img src="images/rock.PNG" alt="rock" height="120">'
            
            } else if (player1Choice === 'paper') {
                paperSound.play();
                player1Div.style.backgroundColor = 'whitesmoke';
                player1Div.innerHTML = '<img src="images/paper.PNG" alt="paper" height="120">'
                
            } else if (player1Choice === 'scissors') {
                scissorsSound.play();
                player1Div.style.backgroundColor = 'whitesmoke';
                player1Div.innerHTML = '<img src="images/scissors.PNG" alt="scissors" height="120">'
                
            } else {
                console.log('something went wrong');
            }

            setTimeout(function(){
                if (player2Choice === 'rock') {
                    rockSound.play();
                    player2Div.style.backgroundColor = 'whitesmoke';
                    player2Div.innerHTML = '<img src="images/rock.PNG" alt="rock" height="120">'
                
                } else if (player2Choice === 'paper') {
                    paperSound.play();
                    player2Div.style.backgroundColor = 'whitesmoke';
                    player2Div.innerHTML = '<img src="images/paper.PNG" alt="paper" height="120">'
                    
                } else if (player2Choice === 'scissors') {
                    scissorsSound.play();
                    player2Div.style.backgroundColor = 'whitesmoke';
                    player2Div.innerHTML = '<img src="images/scissors.PNG" alt="scissors" height="120">'
                    
                } else {
                    console.log('something went wrong');
                }

                setTimeout(function(){
                    if (player1Choice === player2Choice) {
                        textbox.innerHTML = "<p>It's a draw! Players take no damage</p>"
                    } else if (player1Choice === 'rock' && player2Choice === 'paper') {
                        manageHP(player1, player2);
                        textbox.innerHTML = "<p>Player 2's paper beat Player 1's rock! Player 1 takes damage.</p>"
                    } else if (player1Choice === 'rock' && player2Choice === 'scissors') {
                        manageHP(player2, player1);
                        textbox.innerHTML = "<p>Player 1's rock beat Player 2's scissors! Player 2 takes damage.</p>"
                    } else if (player1Choice === 'paper' && player2Choice === 'rock') {
                        manageHP(player2, player1);
                        textbox.innerHTML = "<p>Player 1's paper beat Player 2's rock! Player 2 takes damage.</p>"
                    } else if (player1Choice === 'paper' && player2Choice === 'scissors') {
                        manageHP(player1, player2);
                        textbox.innerHTML = "<p>Player 2's paper beat Player 1's scissors! Player 1 takes damage.</p>"
                    } else if (player1Choice === 'scissors' && player2Choice === 'rock') {
                        manageHP(player1, player2);
                        textbox.innerHTML = "<p>Player 2's rock beat Player 1's scissors! Player 1 takes damage.</p>"
                    } else if (player1Choice === 'scissors' && player2Choice === 'paper') {
                        manageHP(player2, player1);
                        textbox.innerHTML = "<p>Player 1's scissors beat Player 2's paper! Player 2 takes damage.</p>"
                    } else {
                        textbox.innerHTML = 'something went wrong'
                    }

                }, 1000);
            }, 1000)
        }, 1000)
    }
    
    function manageHP(damagedPlayer, otherPlayer){
        if (damagedPlayer.name === 'Player 1') {
                player1.hp = player1.hp - 100;
                document.querySelector('#healthbar1 div').style.height = `${player1.hp}%`;
                document.querySelector('#healthbar1 div').style.top = `${100 - player1.hp}%`;
                document.querySelector('#playerhealth1').innerHTML = `${player1.hp}%`;
            } else if (damagedPlayer.name === 'Player 2') {
                player2.hp = player2.hp - 10;
                document.querySelector('#healthbar2 div').style.height = `${player2.hp}%`;
                document.querySelector('#healthbar2 div').style.top = `${100 - player2.hp}%`;
                document.querySelector('#playerhealth2').innerHTML = `${player2.hp}%`;
            } else {
                console.log('something went wrong');
            }

        gameEnd(damagedPlayer, otherPlayer)

    }

    function gameEnd(damagedPlayer, otherPlayer) {

        if (damagedPlayer.hp <= 0) {
            damagedPlayer.hp = 0;
            gameWin = 'true';
            textbox.innerHTML = `<p>${damagedPlayer.name} lost all HP. ${otherPlayer.name} wins the game!</p>`;
            overlay.innerHTML = `<h1>${otherPlayer.name} is the winner!</h1> <button>Play Again?</button>`
            overlay.removeAttribute('class')
        }

        document.querySelector('#overlay button').addEventListener('click', function(){
            location.reload();
        })
        
    }

    nextRound.addEventListener('click', function(){
        //reset board
        roundCounter += 1;

        popSound.play();

        const radios = document.querySelectorAll('input[type=radio]');
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }

        // reset cards

        for (let i = 0; i < player1Divs.length; i++) {
            player1Divs[i].innerHTML = '<img src="images/roshambo_pattern.png" alt="cardback" width="480">'
            player1Divs[i].style.backgroundColor = '#9b94ad'
        }

        for (let i = 0; i < player2Divs.length; i++) {
            player2Divs[i].innerHTML = '<img src="images/roshambo_pattern.png" alt="cardback" width="480">'
            player2Divs[i].style.backgroundColor = '#9b94ad'
        }
            
        textbox.className = 'hidden';
        nextRound.className = 'hidden';
        quitGame.className = 'hidden';

        overlay.innerHTML = `<h1>Round ${roundCounter}</h1>`;
        overlay.removeAttribute('class');
        setTimeout(function(){overlay.className = 'hidden';}, 2000)

        form1.removeAttribute('class');
    })

    quitGame.addEventListener('click', function(){
        popSound.play();
        location.reload();
    })

    
}())
    
