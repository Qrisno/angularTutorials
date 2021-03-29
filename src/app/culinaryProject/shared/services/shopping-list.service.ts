import {Injectable} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 300),
    new Ingredient('Apples', 300),
  ];
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
