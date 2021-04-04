import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from '../shared/services/shopping-list.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = this.shoppingListService.getIngredients();
  constructor(private shoppingListService: ShoppingListService)  { }

  ngOnInit(): void {
    this.shoppingListService.ingredientsSub$.subscribe((ingredients => {
      this.ingredients = ingredients;
    }));
  }
  newIngredient(e: {name: string, amount: number}): void{
    this.shoppingListService.addIngredient(e);
  }
}
