import { Indexable } from '../_interfaces/indexable';

export class Machine implements Indexable
{
    constructor(public name: string = 'Unknown',
        public icon: string = '__Unknown__.png',
        public craftSpeed: number = 1,
        public craftingCategories: number[] = [],
        public energyConsumption: number = 0,
        public speed: number = 0,
        public production: number = 0,
        public pollution: number = 0,
        public displayed: boolean = false)
    {
        this.name = name;
        this.displayed = displayed;
        this.icon = icon;
        this.speed = speed;
        this.production = production;
        this.energyConsumption = energyConsumption;
        this.craftSpeed = craftSpeed;
        this.pollution = pollution;
        this.craftingCategories = craftingCategories;
    }
}
