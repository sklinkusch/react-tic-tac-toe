import React from "react";
import Board from "./Board";
import calculateWinner from "./helper";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      moves: [
        {
          row: null,
          column: null
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    for (let j = 0; j < squares.length; j++) {
      document.getElementById(`${j}`).style.backgroundColor = "#fff";
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const row = Math.floor(i / 3);
    const col = i % 3;
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      moves: this.state.moves.concat([
        {
          column: col,
          row: row
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      const currentMove = `${
        this.state.moves[move].column != null
          ? `(${this.state.moves[move].column}, ${this.state.moves[move].row})`
          : ""
      }`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>{" "}
          {currentMove}
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if (this.state.stepNumber === 9) {
      status = "Draw between both players";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
