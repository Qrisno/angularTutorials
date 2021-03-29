import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {RecipesService} from '../../shared/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = this.recipeService.getRecipes();
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }
  onRecipeClick(recipe: Recipe): void {
    this.recipeService.recipeSelected.emit(recipe);
  }

}
