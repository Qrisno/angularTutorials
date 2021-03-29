import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = this.shoppingListService.getIngredients();
  constructor(private shoppingListService: ShoppingListService)  { }

  ngOnInit(): void {
  }
  newIngredient(e: {name: string, amount: number}): void{
    this.shoppingListService.addIngredient(e);
    this.ingredients = this.shoppingListService.getIngredients();
  }
}
