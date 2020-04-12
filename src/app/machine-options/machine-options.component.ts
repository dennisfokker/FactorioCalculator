import { MachineOption } from './../_models/options/machineOption';
import { Component, OnInit, Input } from '@angular/core';
import { CraftingMachine } from '../_models/factorio/craftingMachine';

@Component({
    selector: 'app-machine-options',
    templateUrl: './machine-options.component.html',
    styleUrls: ['./machine-options.component.css']
})
export class MachineOptionsComponent implements OnInit
{
    @Input() id: string;
    @Input() machine: CraftingMachine;
    machineOption: MachineOption;

    constructor() { }

    ngOnInit()
    {
        this.machineOption = new MachineOption(this.machine);
    }
}
