import { ItemOption } from './../options/itemOption';
import { Recipe } from './recipe';
import { Indexable } from '../../_interfaces/indexable';
import { ItemGroup } from './ItemGroup';

export class Item implements Indexable
{
    constructor(public name: string,
        public icon: string = '__Unknown__.png',
        public group: string|ItemGroup,
        public shared: boolean = false,
        public amount: number = 0,
        public recipes: (string | Recipe)[] = []) { }

    public toOption(shared?: boolean, amount?: number): ItemOption
    {
        return new ItemOption(this, shared, amount);
    }

    public toString(): string
    {
        return this.name;
    }
}
