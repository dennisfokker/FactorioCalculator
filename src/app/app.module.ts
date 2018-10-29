import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DefaultUsageComponent } from './default-usage/default-usage.component';
import { SettingsAndItemsComponent } from './settings-and-items/settings-and-items.component';
import { MachineOptionsComponent } from './machine-options/machine-options.component';
import { CraftingCategoryOptionsComponent } from './crafting-category-options/crafting-category-options.component';
import { ModOptionsComponent } from './mod-options/mod-options.component';
import { ItemOptionsComponent } from './item-options/item-options.component';
import { RecipeOptionsComponent } from './recipe-options/recipe-options.component';


@NgModule({
    declarations: [
        AppComponent,
        RecipesComponent,
        DefaultUsageComponent,
        SettingsAndItemsComponent,
        MachineOptionsComponent,
        CraftingCategoryOptionsComponent,
        ModOptionsComponent,
        ItemOptionsComponent,
        RecipeOptionsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
