import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <button
    class="btn btn-primary"
    (click)="handleClick()">
    {{ value }}
  </button>
  `,
  styleUrls: ['./square.component.css'],

})
export class SquareComponent implements OnInit {

  @Input() id: number;
  value: string;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.value = 'clicked!';
    console.log(this.id);
  }
}
