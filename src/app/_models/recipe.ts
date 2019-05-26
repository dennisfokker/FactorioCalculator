import { Ingredient } from './ingredient';
import { Result } from './result';
import { Indexable } from '../_interfaces/indexable';

export class Recipe implements Indexable
{
    constructor(public results: Result[],
        public name: string = 'Unknown',
        public category: string = 'crafting',
        public ingredients: Ingredient[] = [],
        public energyRequired: number = 0.5)
    {
        this.name = name;
        this.category = category;
        this.ingredients = ingredients;
        this.results = results;
        this.energyRequired = energyRequired;
    }
}
