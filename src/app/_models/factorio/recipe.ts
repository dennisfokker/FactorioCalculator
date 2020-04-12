import { Result } from './result';
import { RecipeCategory } from './recipeCategory';
import { Ingredient } from './ingredient';
import { Indexable } from '../../_interfaces/indexable';

export class Recipe implements Indexable
{
    constructor(public name: string = 'Unknown',
        public energyRequired: number = 0.5,
        public recipeCategory: string|RecipeCategory = 'Unknown',
        public ingredients: Ingredient[] = [],
        public results: Result[] = []) { }

    public toString(): string
    {
        return this.name;
    }
}
