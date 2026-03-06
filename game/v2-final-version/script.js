(function(){
    'use strict';
    console.log('reading js');

    const form1 = document.querySelector('#player1form');
    const form2 = document.querySelector('#player2form');

    const player1 = {
        first: '',
        second: '',
        third: '',
        hp: 10,
    }

    const player2 = {
        first: '',
        second: '',
        third: '',
        hp: 10,
    }

    form1.addEventListener('submit', function(event){
        event.preventDefault();

        // Store checked options as variables

        // Set player objects equal to form data
        player1.first = check

        form2.removeAttribute('class');
        form1.className = 'hidden';
    })

    // const rock = document.querySelector('#rock');
    // const paper = document.querySelector('#paper');
    // const scissors = document.querySelector('#scissors');
    // const dialogue = document.querySelector('p')
    // let currentplayer = 'Player 1'
    // let player1 = '';
    // let player2 = '';

    // rock.addEventListener('click', function(){
    //     if (currentplayer === 'Player 1') {
    //         player1 = 'rock';
    //         currentplayer = 'Player 2';
    //         dialogue.innerHTML = 'Player 2, choose Rock, Paper, or Scissors'
    //     } else {
    //         player2 = 'rock';
    //         clash();
    //     }
    // })

    // paper.addEventListener('click', function(){
    //     if (currentplayer === 'Player 1') {
    //         player1 = 'paper';
    //         currentplayer = 'Player 2';
    //         dialogue.innerHTML = 'Player 2, choose Rock, Paper, or Scissors'
    //     } else {
    //         player2 = 'paper';
    //         clash();
    //     }
    // })

    // scissors.addEventListener('click', function(){
    //     if (currentplayer === 'Player 1') {
    //         player1 = 'scissors';
    //         currentplayer = 'Player 2';
    //         dialogue.innerHTML = 'Player 2, choose Rock, Paper, or Scissors'
    //     } else {
    //         player2 = 'scissors';
    //         clash();
    //     }
    // })

    // function clash(){
    //     console.log('clash!')
    //     if (player1 === player2) {
    //         dialogue.innerHTML = "It's a draw!"
    //     } else if (player1 === 'rock' && player2 === 'paper') {
    //         dialogue.innerHTML = "Player 2's paper beat Player 1's rock!"
    //     } else if (player1 === 'rock' && player2 === 'scissors') {
    //         dialogue.innerHTML = "Player 1's rock beat Player 2's scissors!"
    //     } else if (player1 === 'paper' && player2 === 'rock') {
    //         dialogue.innerHTML = "Player 1's paper beat Player 2's rock!"
    //     } else if (player1 === 'paper' && player2 === 'scissors') {
    //         dialogue.innerHTML = "Player 2's paper beat Player 1's scissors!"
    //     } else if (player1 === 'scissors' && player2 === 'rock') {
    //         dialogue.innerHTML = "Player 2's rock beat Player 1's scissors!"
    //     } else if (player1 === 'scissors' && player2 === 'paper') {
    //         dialogue.innerHTML = "Player 1's scissors beat Player 2's paper!"
    //     } else {
    //         dialogue.innerHTML = 'something went wrong'
    //     }
    // }
    
}())
    
