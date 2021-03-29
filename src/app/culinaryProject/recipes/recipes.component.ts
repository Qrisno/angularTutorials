import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {RecipesService} from '../shared/services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
 recipe!: Recipe;
  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe((val) => {
      this.recipe = val;
    });
  }

}
