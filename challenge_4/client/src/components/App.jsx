import React from 'react';
import Slot from './Slot.jsx';
import Column from './Column.jsx'

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            board: [
                ['empty','empty','empty','empty','empty','empty'],
                ['empty','empty','empty','empty','empty','empty'],
                ['empty','empty','empty','empty','empty','empty'],
                ['empty','empty','empty','empty','empty','empty'],
                ['empty','empty','empty','empty','empty','empty'],
                ['empty','empty','empty','empty','empty','empty'],
                ['empty','empty','empty','empty','empty','empty']
            ],
            blacksTurn: true,
            blackWins: null
        }
        this.columnClicked = this.columnClicked.bind(this);
    }

    checkForWin() {
        var board = this.state.board.slice();
        var blackWins = this.state.blackWins;

        if (blackWins === null) {
            //check for column wins
            for (let i = 0; i < board.length; i++) {
                var filteredColumn = board[i].filter((item) => item !== 'empty');
    
                for (let j = filteredColumn.length - 1; j > 2; j--) {
                    var win = true;
                    var color;
                    for (let k = j; k > j - 3 ; k--) {
                        if (filteredColumn[k] === filteredColumn[k-1] && win) {
                            color = filteredColumn[k];
                        } else {
                            win = false;
                            break;
                        }
                    }
                    
                    if (win && color === 'black') {
                        blackWins = true;
                    } else if (win && color === 'red') {
                        blackWins = false;
                    }
                }
            }
    
            //check for row wins
            for (let row = board.length - 1; row > -1; row--) {
                for (let j = 0; j < 4; j++) {
                    var win = true;
                    var color;
                    for (let k = j; k < j + 3; k++) {
                        if (board[k][row] !== 'empty' && board[k][row] === board[k+1][row]) {
                            color = board[k][row];
                        } else {
                            win = false;
                            break;
                        }
                    }
                    
                    if (win && color === 'black') {
                        blackWins = true;
                        break;
                    } else if (win && color === 'red') {
                        blackWins = false;
                        break;
                    }
                }
            }
        }

        if (blackWins !== undefined) {
            this.setState({
                blackWins: blackWins
            })
        } 
    }


    columnClicked(xCoordinate) {
        var column = this.state.board[xCoordinate];
        var newBoard = this.state.board.slice();
        var newTurn = !this.state.blacksTurn;

        for (var i = column.length - 1; i > -1; i--) {
            if (column[i] === 'empty' && this.state.blacksTurn === true) {
                column[i] = 'black';
                break;
            } else if (column[i] === 'empty' && this.state.blacksTurn === false) {
                column[i] = 'red';
                break;
            }
        }

        newBoard[xCoordinate] = column;

        this.setState({
            board: newBoard,
            blacksTurn: newTurn
        });

        this.checkForWin();
    }

    render() {
        if (this.state.blackWins === null) {
            var win = null;
        } else if (this.state.blackWins) {
            var win = (<h1 id="turn">Black Wins!</h1>);
        } else {
            var win = (<h1 id="turn">Red Wins!</h1>);
        }

        return (
            <div>
                {this.state.blacksTurn ? (<h3 id="turn">Black's turn!</h3>) : (<h3 id="turn">Red's turn!</h3>)}
                {win}
                <div id="board">
                    {this.state.board.map((column, i) => 
                        <Column colNumber={i} column={this.state.board[i]} key={i} columnClicked = {this.columnClicked} />
                    )}
                </div>
            </div>
        )
    }
}

export default App;