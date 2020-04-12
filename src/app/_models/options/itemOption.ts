import { Item } from '../factorio/item';

export class ItemOption
{
    constructor(public item: Item,
        public shared: boolean = false,
        public amount: number = 0) { }
}
