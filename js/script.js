// Inicjalizacja liczników
let computerPoints = 0;
let playerPoints = 0;
let numberOfRounds = 0;



function playGame(playerInput){
    clearMessages();

// ruchy
    function getMoveName(argMoveId){
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
    

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);
    
    printMessage('Mój ruch to: ' + computerMove);
    printMessage('Twój ruch to: ' + playerMove);

// wyniki 

    displayResult(computerMove, playerMove);

    function displayResult(argComputerMove, argPlayerMove){
        if( argComputerMove == argPlayerMove){
            printMessage('Jest remis!');
        } else if (( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || ( argComputerMove == 'papier' && argPlayerMove == 'kamień') || ( argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
            printMessage('Przegrywasz!');
            computerPoints = computerPoints + 1; // counting computer wins
        } else {
        printMessage('Wygrywasz!');
        playerPoints = playerPoints + 1;    // counting human wins
        }
        printMessage('Komputer zagrał ' + argComputerMove + ', a Człowiek zagrał ' + argPlayerMove);
    }
    
    numberOfRounds = numberOfRounds +1;


    printMessage('Komputer  -  Ludź ');
    printMessage(computerPoints + ' - ' + playerPoints);
    printMessage('Liczba remisów ' + (numberOfRounds-(computerPoints+playerPoints)));
    printMessage('Liczba zagranych rund ' + numberOfRounds);

}
  
// knefle 
document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1'); 
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
