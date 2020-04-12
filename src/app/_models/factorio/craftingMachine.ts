import { EffectType } from './../../_types/effectType';
import { RecipeCategory } from './recipeCategory';
import { Machine } from '../../_interfaces/machine';

export class CraftingMachine implements Machine
{
    constructor(public name: string,
        public icon: string = '__Unknown__.png',
        public speed: number = 1,
        public production: number = 0,
        public allowedEffects: EffectType[] = ['speed', 'productivity', 'consumption', 'pollution'],
        public recipeCategories: (string|RecipeCategory)[] = []) { }

        public toString(): string {
            return this.name;
        }
}
