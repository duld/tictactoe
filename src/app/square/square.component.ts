import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button
    [ngClass]="calculateClasses()">
    {{ value }}
  </button>
  `,
  styleUrls: ['./square.component.css'],

})
export class SquareComponent implements OnInit {

  @Input() id: number;
  @Input() value: 'X' | 'O';

  constructor() { }

  ngOnInit() {
  }

  calculateClasses() {
    let classConfig = {};

    switch (this.value) {
      case 'X':
        classConfig = { btn: true, 'btn-danger': true};
        break;
      case 'O':
        classConfig = { btn: true, 'btn-primary': true};
        break;
      default:
        classConfig = { btn: true, 'btn-secondary': true};
        break;
    }

    return classConfig;
  }
}
