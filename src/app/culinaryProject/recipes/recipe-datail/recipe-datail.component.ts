import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {Ingredient} from '../../models/ingredient.model';
import {ShoppingListService} from '../../shared/services/shopping-list.service';
import {RecipesService} from '../../shared/services/recipes.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-recipe-datail',
  templateUrl: './recipe-datail.component.html',
  styleUrls: ['./recipe-datail.component.scss']
})
export class RecipeDatailComponent implements OnInit {
  recipe!: Recipe;
  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipes()[this.activatedRoute.snapshot.params.id];
    this.recipeService.recipeSelected.subscribe((recipe) => {
      this.recipe = this.recipeService.getRecipes()[this.activatedRoute.snapshot.params.id];
    });
  }
  addToShoppingList(ingredients: Ingredient[] | undefined): void{
    if (ingredients) {
    ingredients.forEach((ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    }));
    this.router.navigate(['/shopping']);
    }
  }
  edit(id: number | undefined): void{
    this.router.navigate(['../', id, 'edit'], {relativeTo: this.activatedRoute});
  }

}
