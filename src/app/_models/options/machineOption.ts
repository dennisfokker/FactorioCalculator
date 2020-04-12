import { Machine } from './../../_interfaces/machine';

export class MachineOption
{
    constructor(public machine: Machine,
        public displayedInRecipe: boolean = false,
        public speedModifier: number = 100,
        public productionModifier: number = 100) { }
}
