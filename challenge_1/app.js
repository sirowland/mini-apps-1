var playerXTurn = true;
var boardPieces = ["1-1","1-2","1-3","2-1","2-2","2-3","3-1","3-2","3-3"];

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

document.addEventListener("DOMContentLoaded", function() {

    //initialization add event listeners
    for (var i = 0; i < boardPieces.length; i++) {
        document.getElementById(boardPieces[i]).addEventListener("click", function() {
            placePiece(this);
        })
    }

    //0 out all of the pieces and reset turns
    document.getElementById("reset").addEventListener("click", function() {
        for (var i = 0; i < boardPieces.length; i++) {
            document.getElementById(boardPieces[i]).innerHTML = "[]";
        }
        playerXTurn = true;
    })
});