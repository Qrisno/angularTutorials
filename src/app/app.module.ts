import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './tutorial/server/server.component';
import { ServersComponent } from './tutorial/servers/servers.component';
import { WarningAlertComponent } from './tutorial/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './tutorial/success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import {HeaderComponent} from './culinaryProject/header/header.component';
import {CommonModule} from '@angular/common';
import { RecipesComponent } from './culinaryProject/recipes/recipes.component';
import { RecipesListComponent } from './culinaryProject/recipes/recipes-list/recipes-litst.component';
import { RecipeDatailComponent } from './culinaryProject/recipes/recipe-datail/recipe-datail.component';
import { RecipeItemComponent } from './culinaryProject/recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './culinaryProject/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './culinaryProject/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { GameControlComponent } from './tutorial/game-control/game-control.component';
import { OddComponent } from './tutorial/odd/odd.component';
import { EvenComponent } from './tutorial/even/even.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDatailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
