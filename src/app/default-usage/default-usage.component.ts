import { Component, OnInit, ElementRef } from '@angular/core';
import { Machine } from '../_models/machine';

@Component({
    selector: 'app-default-usage',
    templateUrl: './default-usage.component.html',
    styleUrls: ['./default-usage.component.css']
})
export class DefaultUsageComponent implements OnInit
{
    machines: Machine[];
    collapsed = false;

    constructor() { }

    ngOnInit()
    {
    }
}
