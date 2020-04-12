import { ModelService } from './../../_services/model.service';
import { ItemOption } from './../options/itemOption';
import { ItemGroupOption } from './../options/itemGroupOption';
import { Indexable } from '../../_interfaces/indexable';
import { Item } from './item';

export class ItemGroup implements Indexable
{
    constructor(public name: string,
        public icon: string = '__Unknown__.png',
        public items: (string | Item)[] = []) { }

    public toOption(modelService: ModelService): ItemGroupOption
    {
        const itemOptions: ItemOption[] = this.items.map((item) => {
            if (typeof item === 'string')
            {
                item = modelService.items[item];
            }
            return item.toOption();
        });

        return new ItemGroupOption(this, itemOptions);
    }

    public toString(): string
    {
        return this.name;
    }
}
