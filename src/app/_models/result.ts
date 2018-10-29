import { Item } from './item';

export class Result
{
    constructor(public item: Item,
        public type: string = 'item',
        public amount: number = 1)
    {
        this.type = type;
        this.item = item;
        this.amount = amount;
    }
}
