export class Item
{
    constructor(public name: string = 'Unknown',
        public shared: boolean = false,
        public icon: string = '__Unknown__.png',
        public amount: number = 0)
    {
        this.name = name;
        this.shared = shared;
        this.icon = icon;
        this.amount = amount;
    }
}
