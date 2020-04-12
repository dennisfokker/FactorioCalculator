import { ItemGroupOption } from './../_models/options/itemGroupOption';
import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-item-group-options',
    templateUrl: './item-group-options.component.html',
    styleUrls: ['./item-group-options.component.css']
})
export class ItemGroupOptionsComponent implements OnInit, AfterViewInit
{
    @ViewChild('itemGroupContainer') itemGroupContainer: ElementRef;
    @Input() id: number;
    @Input() itemGroupOption: ItemGroupOption;
    collapsed: boolean = false;
    listCalculatedHeight: string = null;

    constructor() { }

    ngOnInit()
    {
    }

    ngAfterViewInit()
    {
        // That moment you have to wait for two frames. FeelsGoodMan.
        setTimeout(() =>
        {
            setTimeout(() =>
            {
                this.itemGroupContainer.nativeElement.style.height = this.itemGroupContainer.nativeElement.scrollHeight + 5 + 'px';
            }, 0);
        }, 0);
    }

    getItemGroupContainerHeight(): string
    {
        if (this.listCalculatedHeight == null) {
            return 'auto';
        }

        return this.collapsed ? '0px' : this.listCalculatedHeight;
    }

    itemGroupContainerCollapseClick()
    {
        this.collapsed = !this.collapsed;

        if (this.listCalculatedHeight == null) {
            this.listCalculatedHeight = this.itemGroupContainer.nativeElement.scrollHeight + 5 + 'px';
        }
    }
}
