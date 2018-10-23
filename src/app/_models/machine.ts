export class Machine
{
    constructor(public name: string = 'Unknown',
        public displayed: boolean = false,
        public icon: string = '__Unknown__.png',
        public speed: number = 100,
        public production: number = 100,
        public energyConsumption: number = 0,
        public craftSpeed: number = 1,
        public pollution: number = 0,
        public craftingCategories: number[] = [])
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
