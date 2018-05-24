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

    columnClicked(xCoordinate) {
        var column = this.state.board[xCoordinate];
        var newBoard = this.state.board.slice();
        var turn = !this.state.blacksTurn;

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
            blacksTurn: turn
        });
    }

    render() {
        return (
            <div id="board">
                <Column colNumber={0} column={this.state.board[0]} columnClicked={this.columnClicked} rows={this.state.rows} />
                <Column colNumber={1} column={this.state.board[1]} columnClicked={this.columnClicked} rows={this.state.rows} />
                <Column colNumber={2} column={this.state.board[2]} columnClicked={this.columnClicked} rows={this.state.rows} />
                <Column colNumber={3} column={this.state.board[3]} columnClicked={this.columnClicked} rows={this.state.rows} />
                <Column colNumber={4} column={this.state.board[4]} columnClicked={this.columnClicked} rows={this.state.rows} />
                <Column colNumber={5} column={this.state.board[5]} columnClicked={this.columnClicked} rows={this.state.rows} />
                <Column colNumber={6} column={this.state.board[6]} columnClicked={this.columnClicked} rows={this.state.rows} />
            </div>
        )
    }
}

export default App;