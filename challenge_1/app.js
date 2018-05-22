var board = {
    boardPieces: [["1-1","1-2","1-3"],["2-1","2-2","2-3"],["3-1","3-2","3-3"]],
    boardPiecesCol: [["1-1","2-1","3-1"],["1-2","2-2","3-2"],["1-3","2-3","3-3"]],
    majDiag: [["1-1","2-2","3-3"]],
    minDiag: [["1-3","2-2","3-1"]],
    playerXTurn: true,
    pieceCount: 0,
    xScore: 0,
    oScore: 0,
    lastWin: null,

    placePiece: function(domElement) {
        var id = domElement.id;
    
        //check if piece already placed
        if (view.getInner(id) === "X" || view.getInner(id) === "O") {
            return;
        }
    
        //place piece and flip turn
        if (this.playerXTurn === true) {
            view.setInner(id, "X");
            this.playerXTurn = !this.playerXTurn;
        } else {
            view.setInner(id, "O");
            this.playerXTurn = !this.playerXTurn;        
        }
    },

    checkForWin: function() {

        var board = this.boardPieces.concat(this.boardPiecesCol).concat(this.majDiag).concat(this.minDiag);

        function check() {
            for (var i = 0; i < board.length; i++) {
                var xWin = board[i].every((piece) => view.getInner(piece) === "X");
                var oWin = board[i].every((piece) => view.getInner(piece) === "O");
                
                if (xWin) {
                    return "x"
                } else if (oWin) {
                    return "o"
                }
            }
        }
    
        var win = check();
        
        if (win === "x") {
            this.xScore++;
            var winString = view.p1Name ? view.p1Name + " (X) Score: " + this.xScore : " (X) Score: " + this.xScore;
            view.setInner("xscore", winString);
            return "X Wins!";
        } else if (win === "o") {
            this.oScore++;
            var winString =  view.p2Name ? view.p2Name + " (O) Score: " + this.oScore : " (O) Score: " + this.oScore;
            view.setInner("oscore", winString);
            return "O Wins!";
        } else if (this.pieceCount === 9) {
            return "Tied!"
        }
    }
}

var view = {
    p1Name: null,
    p2Name: null,

    getInner: function(id) {
        return document.getElementById(id).innerHTML;
    },

    setInner: function(id, value) {
        document.getElementById(id).innerHTML = value;
    },

    init: function() {
        document.addEventListener("DOMContentLoaded", function() {
            //initialize scores
            view.setInner("xscore", "(X) Score: " + board.xScore);
            view.setInner("oscore", "(O) Score: " + board.oScore);
        
            //Deal with player 1 and player 2 Submissions
            document.getElementById("p1").addEventListener("keyup", function(e){
                if (e.keyCode === 13){
                    view.setInner("xscore", e.target.value + " " + view.getInner("xscore"));
                    view.p1Name = e.target.value; 
                    document.getElementById("p1").remove();
                }
            });
    c
            document.getElementById("p2").addEventListener("keyup", function(e){
                if (e.keyCode === 13){
                    view.setInner("oscore", e.target.value + " " + view.getInner("oscore"));
                    view.p2Name = e.target.value;
                    document.getElementById("p2").remove();
                }
            });
        
            //initialization add event listeners
            for (var i = 0; i < board.boardPieces.length; i++) {
                for (var j = 0; j < board.boardPieces[i].length; j++) {
                    document.getElementById(board.boardPieces[i][j]).addEventListener("click", function() {
                        board.placePiece(this);
                        board.pieceCount++;
        
                        var output = board.checkForWin();
        
                        if (output) {
                            board.lastWin = output[0];
                            view.setInner("result", output);
                        }
                    })
                }
            }
        
            //0 out all of the pieces and reset turns
            document.getElementById("reset").addEventListener("click", function() {
                for (var i = 0; i < board.boardPieces.length; i++) {
                    for (var j = 0; j < board.boardPieces[i].length; j++) {
                        document.getElementById(board.boardPieces[i][j]).innerHTML = "";
                    }
                }
        
                //REINITIALIZE BOARD
                //check who won last
                if (board.lastWin === "X") {
                    board.playerXTurn = true;
                } else {
                    board.playerXTurn = false;
                }
                board.pieceCount = 0;
                view.setInner("result", "");
            })
        });
    }
}

view.init();