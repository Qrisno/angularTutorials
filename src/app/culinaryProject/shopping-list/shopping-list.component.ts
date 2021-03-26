import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../models/Ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 300),
    new Ingredient('Apples', 300),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
