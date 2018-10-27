import { Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Mod } from '../_models/mod';

@Component({
    selector: 'app-mod-options',
    templateUrl: './mod-options.component.html',
    styleUrls: ['./mod-options.component.css']
})
export class ModOptionsComponent implements OnInit, AfterViewInit
{
    @ViewChild('modListContainer') modListContainer: ElementRef;
    @Input() id: number;
    @Input() mod: Mod;
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
                this.modListContainer.nativeElement.style.height = this.modListContainer.nativeElement.scrollHeight + 5 + 'px';
            }, 0);
        }, 0);
    }

    getModListContainerHeight(): string
    {
        if (this.listCalculatedHeight == null) {
            return 'auto';
        }

        return this.collapsed ? '0px' : this.listCalculatedHeight;
    }

    modListContainerCollapseClick()
    {
        this.collapsed = !this.collapsed;

        if (this.listCalculatedHeight == null) {
            this.listCalculatedHeight = this.modListContainer.nativeElement.scrollHeight + 5 + 'px';
        }
    }
}
