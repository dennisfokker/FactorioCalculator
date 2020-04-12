import { ItemGroup } from './../factorio/ItemGroup';
import { ItemOption } from './itemOption';

export class ItemGroupOption
{
    constructor(public itemGroup: ItemGroup,
        public items: ItemOption[]) { }
}
