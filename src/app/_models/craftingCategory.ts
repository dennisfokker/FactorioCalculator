import { Machine } from './machine';

export class CraftingCategory
{
    public machineDict: { [name: string]: Machine } = {};

    constructor(public category: string = 'Unknown',
        public machines: Machine[] = [])
    {
        this.category = category;
        this.machines = machines;

        this.machines.forEach((m) =>
        {
            this.machineDict[m.name] = m;
        });
    }
}
