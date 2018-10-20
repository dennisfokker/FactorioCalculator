import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DefaultUsageComponent } from './default-usage/default-usage.component';
import { OptionsAndItemsComponent } from './options-and-items/options-and-items.component';


@NgModule({
    declarations: [
        AppComponent,
        RecipesComponent,
        DefaultUsageComponent,
        OptionsAndItemsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
