import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  number = 0;
  increment = 1;
  numbers: Array<number> = [];
  interval: any;
  clearAll = false;
  constructor() { }

  ngOnInit(): void {
  }
  pause(): void {
    clearInterval(this.interval);
  }
  stop(): void {
    this.numbers = [];
    this.number = 0;
    clearInterval(this.interval);
  }
  onStart(): void{
    this.interval = setInterval(() => {
      this.number += this.increment;
      this.numbers.push(this.number);
    }, 1000);
  }

}
