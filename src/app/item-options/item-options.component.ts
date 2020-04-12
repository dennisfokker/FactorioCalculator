import { Item } from '../_models/factorio/item';
import { Component, OnInit, Input, AfterViewInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-item-options',
    templateUrl: './item-options.component.html',
    styleUrls: ['./item-options.component.css']
})
export class ItemOptionsComponent implements OnInit
{
    @Input() id: string;
    @Input() item: Item;

    constructor(private elRef: ElementRef) { }

    ngOnInit()
    {
    }
}
