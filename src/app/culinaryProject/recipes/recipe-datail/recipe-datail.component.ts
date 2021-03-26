import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-datail',
  templateUrl: './recipe-datail.component.html',
  styleUrls: ['./recipe-datail.component.scss']
})
export class RecipeDatailComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
