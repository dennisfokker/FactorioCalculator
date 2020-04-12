import { ModelService } from './../_services/model.service';
import { CraftingMachine } from '../_models/factorio/craftingMachine';
import { RecipeCategory } from '../_models/factorio/recipeCategory';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-default-usage',
    templateUrl: './default-usage.component.html',
    styleUrls: ['./default-usage.component.css']
})
export class DefaultUsageComponent implements OnInit
{
    craftingCategories: RecipeCategory[] = [];
    collapsed = false;

    constructor(public modelService: ModelService)
    {
        modelService.craftingCategoriesChanged.subscribe((craftingCategories) => this.craftingCategories = craftingCategories);
    }

    ngOnInit()
    {
        const machine1 = new CraftingMachine('Assembling machine 1', 'assembling-machine-1.png');
        const machine2 = new CraftingMachine('Assembling machine 2', 'assembling-machine-2.png');
        const electricmine = new CraftingMachine('Electric mining drill', 'electric-mining-drill.png');
        const bobMachine = new CraftingMachine('Assembly machine 4', undefined);
        this.craftingCategories.push(new RecipeCategory('Base Factorio', [machine1, machine2, electricmine]));
        this.craftingCategories.push(new RecipeCategory('Bob\'s assembling machines', [bobMachine]));
    }
}
