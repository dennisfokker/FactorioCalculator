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
        const machine = new Machine();
        const machine2 = new Machine();
        this.craftingCategories.push(new CraftingCategory('base', [machine, machine2, machine]));
        this.craftingCategories.push(new CraftingCategory('base', [machine2, machine]));
    }
}
