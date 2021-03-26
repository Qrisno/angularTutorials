import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit, OnChanges {
  oddNums: Array<number> = [];
  constructor() { }
  @Input() number: any;

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    if (this.number % 2 !== 0) { this.oddNums.push(this.number); }
  }

}
