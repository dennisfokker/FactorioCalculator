import { CraftingMachine } from './craftingMachine';
import { Indexable } from '../../_interfaces/indexable';
import { Recipe } from './recipe';

export class RecipeCategory implements Indexable
{
    constructor(public name: string = 'Unknown',
        public craftingMachines: (string|CraftingMachine)[] = [],
        public recipes: (string | Recipe)[] = []) { }

    public toString(): string
    {
        return this.name;
    }
}
