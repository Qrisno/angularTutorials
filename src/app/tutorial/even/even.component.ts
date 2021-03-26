import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit, OnChanges  {
  @Input() number: any;
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    if (this.number % 2 === 0) {this.evenNumbers.push(this.number); }
  }
}
