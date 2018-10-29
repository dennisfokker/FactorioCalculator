import { Item } from './item';
import { Recipe } from './recipe';

export class Ingredient
{
    constructor(public item: Item,
        public recipe: Recipe,
        public amount: number = 1)
    {
        this.item = item;
        this.recipe = recipe;
        this.amount = amount;
    }
}
