import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from './culinaryProject/recipes/recipes.component';
import {ShoppingListComponent} from './culinaryProject/shopping-list/shopping-list.component';
import {RecipeDatailComponent} from './culinaryProject/recipes/recipe-datail/recipe-datail.component';
import {RecipesStartComponent} from './culinaryProject/recipes/recipes-start/recipes-start.component';
import {RecipeEditComponent} from './culinaryProject/recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipesStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDatailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
    ]},
  {path: 'shopping', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
