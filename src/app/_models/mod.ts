import { Item } from './item';

export class Mod
{
    constructor(public name: string = 'Unknown',
        public items: Item[] = [])
    {
        this.name = name;
        this.items = items;
    }
}
