import { Item } from './item';
import { Indexable } from '../../_interfaces/indexable';

export class Result
{
    constructor(public item: string|Item = 'Unknown',
        public type: string = 'item',
        public amount: number = 1) { }

    public toString(): string
    {
        if (typeof this.item === 'string') {
            return this.item;
        }
        return this.item.name;
    }
}
