import { Component, OnInit } from '@angular/core';
import {Recipe} from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
 recipe: Recipe | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeReceive(e: Recipe): void{
    this.recipe = e;
  }

}
