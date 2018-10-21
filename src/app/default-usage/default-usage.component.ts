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
    machines: Machine[] = [];
    craftingCategories: CraftingCategory[] = [];
    collapsed = false;

    constructor() { }

    ngOnInit()
    {
        this.craftingCategories.push(new CraftingCategory('base', [new Machine(), new Machine(), new Machine(), new Machine()]));
        this.craftingCategories.push(new CraftingCategory('base with a very obvioxiously long name', [new Machine(), new Machine(), new Machine(), new Machine(), new Machine()]));
        this.craftingCategories.push(new CraftingCategory('base 3', [new Machine(), new Machine(), new Machine(), new Machine(), new Machine()]));
    }
}
