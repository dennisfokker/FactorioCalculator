import { Machine } from './machine';

export class CraftingCategory
{
    public machineDict: { [name: string]: Machine } = {};

    constructor(public name: string = 'Unknown',
        public machines: Machine[] = [])
    {
        this.name = name;
        this.machines = machines;

        this.machines.forEach((m) =>
        {
            this.machineDict[m.name] = m;
        });
    }
}
