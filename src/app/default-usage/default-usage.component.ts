import { ModelService } from './../_services/model.service';
import { Machine } from './../_models/machine';
import { CraftingCategory } from './../_models/craftingCategory';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-default-usage',
    templateUrl: './default-usage.component.html',
    styleUrls: ['./default-usage.component.css']
})
export class DefaultUsageComponent implements OnInit
{
    craftingCategories: CraftingCategory[] = [];
    collapsed = false;

    constructor(public modelService: ModelService)
    {
        modelService.craftingCategoriesChanged.subscribe((craftingCategories) => this.craftingCategories = craftingCategories);
    }

    ngOnInit()
    {
        const machine1 = new Machine('Assembling machine 1', 'assembling-machine-1.png');
        const machine2 = new Machine('Assembling machine 2', 'assembling-machine-2.png');
        const electricmine = new Machine('Electric mining drill', 'electric-mining-drill.png');
        const bobMachine = new Machine('Assembly machine 4', undefined);
        this.craftingCategories.push(new CraftingCategory('Base Factorio', [machine1, machine2, electricmine]));
        this.craftingCategories.push(new CraftingCategory('Bob\'s assembling machines', [bobMachine]));
    }
}
