'use strict';

let startedGame = false;
let currentPlayer = 1;
const dice = document.getElementById("dice");
const playerOneCurrentPoints = document.getElementById("playerOneCurrent");
const playerTwoCurrentPoint = document.getElementById("playerTwoCurrent");
const playerOneTotalPoints = document.getElementById("playerOneTotalPoints");
const playerTwoTotalPoints = document.getElementById("playerTwoTotalPoints");

//Changes color of columns to see which playre's turn
function changeColors(playerOneColor, playerTwoColor){
    playerOneColumn.style.backgroundColor = `rgb(255, 255, 255, ${playerOneColor})`;
    playerTwoColumn.style.backgroundColor = `rgb(255, 255, 255, ${playerTwoColor})`;
}

//Resets game to start position
function resetGame() {
    dice.src = "Dice-1.png";
    dice.style.visibility = "visible";
    startedGame = true;
    changeColors(0.4, 0.2);
    playerOneCurrentPoints.innerText = "0";
    playerTwoCurrentPoint.innerText = "0";
    playerOneTotalPoints.innerText = "0";
    playerTwoTotalPoints.innerText = "0";
    currentPlayer = 1;
}

//Check's if any of the players has won
function checkIfWon(){
    if(parseInt(playerOneTotalPoints.innerText) + parseInt(playerOneCurrentPoints.innerText) >= 10){
        alert("Player 1 has won!!");
        location.reload();
    }
    else if(parseInt(playerTwoTotalPoints.innerText) + parseInt(playerTwoCurrentPoint.innerText) >= 10){
        alert("Player 2 has won!!");
        location.reload();
    }
}

//Changes players which has to roll dice
function changePlayers(){ 
    if(currentPlayer == 1){
        currentPlayer = 2;
        playerOneCurrentPoints.innerText = "0";
        changeColors(0.2, 0.4);
    }else{
        currentPlayer = 1;
        playerTwoCurrentPoint.innerText = "0";
        changeColors(0.4, 0.2);
    }
}

//Updates player's total points count
function updatePlayersCurrentPoints(diceRollNumber){
    if(currentPlayer == 1){
        playerOneCurrentPoints.innerText = parseInt(playerOneCurrentPoints.innerText) + diceRollNumber;
    }else{
        playerTwoCurrentPoint.innerText = parseInt(playerTwoCurrentPoint.innerText) + diceRollNumber;
    }
}

document.getElementById("new-game").addEventListener("click", function(){
    resetGame();
});

//Changes player's turn and updates total points for player
document.getElementById("hold").addEventListener("click", function(){
    if(startedGame){
        checkIfWon();
        if(currentPlayer == 1){
            playerOneTotalPoints.innerText = parseInt(playerOneTotalPoints.innerText) + parseInt(playerOneCurrentPoints.innerText);
        }else{
            playerTwoTotalPoints.innerText = parseInt(playerTwoTotalPoints.innerText) + parseInt(playerTwoCurrentPoint.innerText);
        }
        changePlayers();
    }else{
        alert("You must start the game!")
    }
});

//Rols the dice 
document.getElementById("roll-dice").addEventListener("click", function(){
    if(startedGame){
        const diceRollNumber = Math.floor(Math.random() * 6) + 1;
        dice.src = `Dice-${diceRollNumber}.png`;
            
        if(diceRollNumber == 1){
            changePlayers();
        }else{
            updatePlayersCurrentPoints(diceRollNumber)
        }
    }else{
        alert("You must start the game!")
    }
});