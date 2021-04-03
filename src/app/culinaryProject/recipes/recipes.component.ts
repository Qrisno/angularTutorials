import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {RecipesService} from '../shared/services/recipes.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
 recipe!: Recipe;
  constructor(private recipesService: RecipesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe((val) => {
      this.recipe = val;
    });
  }

}
