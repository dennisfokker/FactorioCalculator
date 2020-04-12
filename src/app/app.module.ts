import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RecipesComponent } from './recipes/recipes.component';
import { DefaultUsageComponent } from './default-usage/default-usage.component';
import { SettingsAndItemsComponent } from './settings-and-items/settings-and-items.component';
import { MachineOptionsComponent } from './machine-options/machine-options.component';
import { CraftingCategoryOptionsComponent } from './crafting-category-options/crafting-category-options.component';
import { ItemGroupOptionsComponent } from './item-group-options/item-group-options.component';
import { ItemOptionsComponent } from './item-options/item-options.component';
import { RecipeNodeComponent } from './recipe-node/recipe-node.component';
import { ModelService } from './_services/model.service';
import { FactorioPathSelectorComponent } from './_modals/factorio-path-selector/factorio-path-selector.component';
import { ModalService } from './_services/modal.service';
import { ModalContainerComponent } from './_modals/modal-container/modal-container.component';
import { ModalDirective } from './_directives/modal.directive';
import { ModPathSelectorComponent } from './_modals/mod-path-selector/mod-path-selector.component';
import { NAComponent } from './_modals/na/na.component';


@NgModule({
    declarations: [
        AppComponent,
        RecipesComponent,
        DefaultUsageComponent,
        SettingsAndItemsComponent,
        MachineOptionsComponent,
        CraftingCategoryOptionsComponent,
        ItemGroupOptionsComponent,
        ItemOptionsComponent,
        RecipeNodeComponent,
        FactorioPathSelectorComponent,
        ModPathSelectorComponent,
        NAComponent,
        ModalContainerComponent,
        ModalDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        DeviceDetectorModule.forRoot()
    ],
    entryComponents: [FactorioPathSelectorComponent, ModPathSelectorComponent, NAComponent],
    providers: [ModelService, ModalService],
    bootstrap: [AppComponent]
})
export class AppModule { }
