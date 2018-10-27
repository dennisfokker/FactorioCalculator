import { Component, OnInit, Input } from '@angular/core';
import { Machine } from '../_models/machine';

@Component({
    selector: 'app-machine-options',
    templateUrl: './machine-options.component.html',
    styleUrls: ['./machine-options.component.css']
})
export class MachineOptionsComponent implements OnInit
{
    @Input() id: string;
    @Input() machine: Machine;

    constructor() { }

    ngOnInit()
    {
    }
}
