let players = ['x', 'o'];
let activePlayer = 0;

let move = 0;

let playingField = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function startGame() {
    //reset the field
    playingField = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    renderBoard(playingField);
    move = 0;    
}

function click(row, col) {

    move % 2 === 0 ? activePlayer = 0 : activePlayer = 1;
    playingField[row][col] = players[activePlayer];
    renderBoard(playingField);
    move++;

    //check winner
    for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (playingField[i][0] == players[activePlayer] && playingField[i][1] == players[activePlayer] && playingField[i][2] == players[activePlayer]) { 
                showWinner(activePlayer)
            } else if (playingField[0][j] == players[activePlayer] && playingField[1][j] == players[activePlayer] && playingField[2][j] == players[activePlayer]) { 
                showWinner(activePlayer)
            } else if (playingField[0][0] === players[activePlayer] && playingField[1][1] === players[activePlayer] && playingField[2][2] === players[activePlayer]) {
                showWinner(activePlayer)
            } else if (playingField[0][2] === players[activePlayer] && playingField[1][1] === players[activePlayer] && playingField[2][0] === players[activePlayer]) {
                showWinner(activePlayer)
            }
        }
    }     
}


