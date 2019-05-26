import { Item } from './item';
import { Indexable } from '../_interfaces/indexable';

export class Result implements Indexable
{
    get name(): string
    {
        if (this.item === undefined) {
            return 'Uknown';
        }
        return this.item.name;
    }

    constructor(public item: Item,
        public type: string = 'item',
        public amount: number = 1)
    {
        this.type = type;
        this.item = item;
        this.amount = amount;
    }
}
