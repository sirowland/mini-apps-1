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
            blacksTurn: true
        }
        this.columnClicked = this.columnClicked.bind(this);
    }

    checkForWin() {
        
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
    }

    render() {
        return (
            <div>
                {this.state.blacksTurn ? (<h3 id="turn">Black's turn!</h3>) : (<h3 id="turn">Red's turn!</h3>)}
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