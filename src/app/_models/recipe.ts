import { Ingredient } from './ingredient';
import { Result } from './result';

export class Recipe
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
