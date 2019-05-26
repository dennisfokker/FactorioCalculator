import { Indexable } from '../_interfaces/indexable';

export class Item implements Indexable
{
    constructor(public name: string = 'Unknown',
        public icon: string = '__Unknown__.png',
        public shared: boolean = false,
        public amount: number = 0)
    {
        this.name = name;
        this.icon = icon;
        this.shared = shared;
        this.amount = amount;
    }
}
