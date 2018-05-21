var playerXTurn = true;
var pieceCount = 0;
var xScore = 0;
var oScore = 0;
var lastWin = null;
var p1Name = null;
var p2Name = null;

var boardPieces = [["1-1","1-2","1-3"],["2-1","2-2","2-3"],["3-1","3-2","3-3"]];
var boardPiecesCol = [["1-1","2-1","3-1"],["1-2","2-2","3-2"],["1-3","2-3","3-3"]];
var majDiag = [["1-1","2-2","3-3"]];
var minDiag = [["1-3","2-2","3-1"]];
var board = boardPieces.concat(boardPiecesCol).concat(majDiag).concat(minDiag);

function placePiece(domElement) {
    var id = domElement.id;

    //check if piece already placed
    if (document.getElementById(id).innerHTML === "X" || document.getElementById(id).innerHTML === "O") {
        return;
    }

    //place piece and flip turn
    if (playerXTurn === true) {
        document.getElementById(id).innerHTML = "X";
        playerXTurn = !playerXTurn;
    } else {
        document.getElementById(id).innerHTML = "O"
        playerXTurn = !playerXTurn;        
    }
}

function checkForWin() {

    function check() {
        for (var i = 0; i < board.length; i++) {
            var xWin = board[i].every((piece) => document.getElementById(piece).innerHTML === "X");
            var oWin = board[i].every((piece) => document.getElementById(piece).innerHTML === "O");
            
            if (xWin) {
                return "x"
            } else if (oWin) {
                return "o"
            }
        }
    }

    var win = check();
    
    if (win === "x") {
        xScore++;
        document.getElementById("xscore").innerHTML =  p1Name ? p1Name + " (X) Score: " + xScore : " (X) Score: " + xScore;
        return "X Wins!";
    } else if (win === "o") {
        oScore++;
        document.getElementById("oscore").innerHTML =  p2Name ? p2Name + " (O) Score: " + oScore : " (O) Score: " + oScore;
        return "O Wins!";
    } else if (pieceCount === 9) {
        return "Tied!"
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("xscore").innerHTML = "(X) Score: " + xScore;
    document.getElementById("oscore").innerHTML = "(O) Score: " + oScore;

    document.getElementById("p1").addEventListener("keyup", function(e){
        if (e.keyCode === 13){
            document.getElementById("xscore").innerHTML = e.target.value + " " + document.getElementById("xscore").innerHTML;
            p1Name = e.target.value; 
            document.getElementById("p1").remove();
        }
    });

    document.getElementById("p2").addEventListener("keyup", function(e){
        if (e.keyCode === 13){
            document.getElementById("oscore").innerHTML = e.target.value + " " + document.getElementById("oscore").innerHTML; 
            p2Name = e.target.value;
            document.getElementById("p2").remove();
        }
    });

    //initialization add event listeners
    for (var i = 0; i < boardPieces.length; i++) {
        for (var j = 0; j < boardPieces[i].length; j++) {
            document.getElementById(boardPieces[i][j]).addEventListener("click", function() {
                placePiece(this);
                pieceCount++;

                var output = checkForWin();

                if (output) {
                    lastWin = output[0];
                    document.getElementById("result").innerHTML = output;
                }
            })
        }
    }

    //0 out all of the pieces and reset turns
    document.getElementById("reset").addEventListener("click", function() {
        for (var i = 0; i < boardPieces.length; i++) {
            for (var j = 0; j < boardPieces[i].length; j++) {
                document.getElementById(boardPieces[i][j]).innerHTML = "";
            }
        }

        //REINITIALIZE BOARD
        //check who won last
        if (lastWin === "X") {
            playerXTurn = true;
        } else {
            playerXTurn = false;
        }
        pieceCount = 0;
        document.getElementById("result").innerHTML = "";
    })
});