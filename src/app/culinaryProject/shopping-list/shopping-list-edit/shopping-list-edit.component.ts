import {Component, DoCheck, ElementRef, EventEmitter, OnChanges, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit, OnChanges  {
  @ViewChild('name', {static: true}) name: ElementRef | undefined;
  @ViewChild('amount', {static: true}) value: ElementRef | undefined;
  @Output() ingredient: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  ngOnChanges(): void{
    console.log(this.name?.nativeElement.innerText);
  }
  add(): void{
    const ing = {
      name: this.name?.nativeElement.value,
      amount: this.value?.nativeElement.value
    };
    this.ingredient.emit(ing);
  }
  clear(): void{
    // @ts-ignore
    this.name?.nativeElement.value = '';
    // @ts-ignore
    this.value?.nativeElement.value = '';
  }

}
