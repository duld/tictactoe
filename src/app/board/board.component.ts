import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  gameSquares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() {
  }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    console.log('new game');
    this.gameSquares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  test() {
    console.log(this.gameSquares);
  }

  makeMove(idx: number) {
    if (!this.gameSquares[idx] && !this.winner) {
      this.gameSquares.splice(idx, 1, this.player);
      this.winner = this.calculateWinner();
    }
    this.xIsNext = !this.xIsNext;
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2], [0, 3, 6], [0, 4, 8],
      [3, 4, 5], [6, 7, 8], [1, 4, 7],
      [2, 5, 8], [2, 4, 6]
    ];

    for (const line of lines) {
      if (
        this.gameSquares[line[0]] === this.player &&
        this.gameSquares[line[1]] === this.player &&
        this.gameSquares[line[2]] === this.player
      ) {
        return this.player;
      }
    }
    return null;
  }

}
