import { Item } from './item';
import { Indexable } from '../_interfaces/indexable';

export class Mod implements Indexable
{
    constructor(public name: string = 'Unknown',
        public items: Item[] = [])
    {
        this.name = name;
        this.items = items;
    }
}
