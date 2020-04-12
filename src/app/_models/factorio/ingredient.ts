import { Item } from './item';
import { Recipe } from './recipe';

export class Ingredient
{
    constructor(public item: string|Item,
        public amount: number = 1,
        public recipe: string | Recipe) { }

    public toString(): string
    {
        if (typeof this.item === 'string')
        {
            return this.item;
        }
        return this.item.name;
    }
}
