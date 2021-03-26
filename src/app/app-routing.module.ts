import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RecipesComponent} from './culinaryProject/recipes/recipes.component';
import {ShoppingListComponent} from './culinaryProject/shopping-list/shopping-list.component';

const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'shopping', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
