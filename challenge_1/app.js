var playerXTurn = true;
var pieceCount = 0;
var boardPieces = [["1-1","1-2","1-3"],["2-1","2-2","2-3"],["3-1","3-2","3-3"]];
var boardPiecesCol = [["1-1","2-1","3-1"],["1-2","2-2","3-2"],["1-3","2-3","3-3"]];
var majDiag = [["1-1","2-2","3-3"]];
var minDiag = [["1-3","2-2","3-1"]];
var board = boardPieces.concat(boardPiecesCol).concat(majDiag).concat(minDiag);

function placePiece(domElement) {
    var id = domElement.id;

    //check if piece already placed
    if (document.getElementById(id).innerHTML === "[x]" || document.getElementById(id).innerHTML === "[o]") {
        return;
    }

    //place piece and flip turn
    if (playerXTurn === true) {
        document.getElementById(id).innerHTML = "[x]";
        playerXTurn = !playerXTurn;
    } else {
        document.getElementById(id).innerHTML = "[o]"
        playerXTurn = !playerXTurn;        
    }
}

function checkForWin() {

    function check() {
        //checks horizontal direction;
        for (var i = 0; i < board.length; i++) {
            var xWin = board[i].every((piece) => document.getElementById(piece).innerHTML === "[x]");
            var oWin = board[i].every((piece) => document.getElementById(piece).innerHTML === "[o]");
            
            if (xWin) {
                return "x"
            } else if (oWin) {
                return "o"
            }
        }
    }

    var win = check();
    
    if (win === "x") {
        return "X Wins!";
    } else if (win === "o") {
        return "O Wins!";
    } else if (pieceCount === 9) {
        return "Tied!"
    }
}

document.addEventListener("DOMContentLoaded", function() {

    //initialization add event listeners
    for (var i = 0; i < boardPieces.length; i++) {
        for (var j = 0; j < boardPieces[i].length; j++) {
            document.getElementById(boardPieces[i][j]).addEventListener("click", function() {
                placePiece(this);
                pieceCount++;

                var output = checkForWin();

                if (output) {
                    document.getElementById("result").innerHTML = output;
                }
            })
        }
    }

    //0 out all of the pieces and reset turns
    document.getElementById("reset").addEventListener("click", function() {
        for (var i = 0; i < boardPieces.length; i++) {
            for (var j = 0; j < boardPieces[i].length; j++) {
                document.getElementById(boardPieces[i][j]).innerHTML = "[]";
            }
        }
        playerXTurn = true;
        pieceCount = 0;
        document.getElementById("result").innerHTML = '';
    })
});