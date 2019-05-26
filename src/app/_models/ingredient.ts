import { Item } from './item';
import { Recipe } from './recipe';
import { Indexable } from '../_interfaces/indexable';

export class Ingredient implements Indexable
{
    get name(): string
    {
        if (this.item === undefined)
        {
            return 'Uknown';
        }
        return this.item.name;
    }

    constructor(public item: Item,
        public recipe: Recipe,
        public amount: number = 1)
    {
        this.item = item;
        this.recipe = recipe;
        this.amount = amount;
    }
}
