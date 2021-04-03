import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {RecipesService} from '../../shared/services/recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = this.recipeService.getRecipes();
  constructor(private recipeService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onRecipeClick(recipe: Recipe): void {
    this.recipeService.recipeSelected.emit(recipe);
    this.router.navigate([recipe.id], {relativeTo: this.route});
  }

}
