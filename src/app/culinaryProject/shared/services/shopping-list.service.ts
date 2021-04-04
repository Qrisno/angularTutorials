import {Injectable} from '@angular/core';
import {Ingredient} from '../../models/ingredient.model';
import {Subject} from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientsSub$: Subject<Ingredient[]> = new Subject();
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 300),
    new Ingredient('Apples', 300),
  ];
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsSub$.next(this.ingredients.slice());
  }
}
