{
// Game counter initialisation
let computerPoints = 0,
    playerPoints = 0,
    numberOfRounds = 0,
    winRate = 0.75;

function playGame(playerInput){
    clearMessages();

// Translating initialisation values into moves
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
        return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

// Random winning
// let randomNumber = Math.floor(Math.random() * 3 + 1);

// Rigged game 
const randomNumber = Math.random();
console.log(randomNumber);


// let computerMove = getMoveName(randomNumber);
const playerMove = getMoveName(playerInput);


if(randomNumber < winRate){
    // Player wins
    switch (playerMove) {
        case 'kamień': // condition1
            computerMove = 'nożyce';  // instruction1
            break;
        case 'papier': // condition1
            computerMove = 'kamień';  // instruction1
            break;
        case 'nożyce': // condition1
            computerMove = 'papier';  // instruction1
            break;
    }
} else {
    // Computer wins 
    switch (playerMove) {
        case 'kamień': // condition1
            computerMove = 'papier';  // instruction1
            break;
        case 'papier': // condition1
            computerMove = 'nożyce';  // instruction1
            break;
        case 'nożyce': // condition1
            computerMove = 'kamień';  // instruction1
            break;
    }
}

printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);

// Displaying results 
    
    

    const displayResult = function (argComputerMove, argPlayerMove){
        if( argComputerMove == argPlayerMove){
            printMessage('Jest remis!');
        } else if (( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || ( argComputerMove == 'papier' && argPlayerMove == 'kamień') || ( argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
            printMessage('Przegrywasz!');
            computerPoints = computerPoints + 1; // Computer wins
        } else {
        printMessage('Wygrywasz!');
        playerPoints = playerPoints + 1;    // Player wins
        }
        printMessage('Komputer zagrał ' + argComputerMove + ', a Człowiek zagrał ' + argPlayerMove);
    }

    numberOfRounds = numberOfRounds + 1;

    printMessage('Komputer  -  Ludź ');
    printMessage(computerPoints + ' - ' + playerPoints);
    printMessage('Liczba remisów ' + (numberOfRounds-(computerPoints+playerPoints)));
    printMessage('Liczba zagranych rund ' + numberOfRounds);
}
  
// Buttons handling
document.getElementById('play-rock').addEventListener('click', function(){
    for( let i = 0; i < 100; i ++) {
        console.log('Loop iteration: ' + i);
        playGame('1'); 
    }
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
}
