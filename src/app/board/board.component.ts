import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  gameSquares: SquareComponent[] = [];

  constructor() {
   }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    for (let i = 0; i < 9; i++) {
      this.gameSquares.push( new SquareComponent());
    }
  }

}
