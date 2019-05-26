import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ModelService } from './_services/model.service';
import { FolderSelectorComponent } from './_modals/folder-selector/folder-selector.component';
import { ModalService } from './_services/modal.service';


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
        RecipeOptionsComponent,
        FolderSelectorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [FolderSelectorComponent],
    providers: [ModelService, ModalService],
    bootstrap: [AppComponent]
})
export class AppModule { }
