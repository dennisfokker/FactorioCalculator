import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-options-and-items',
    templateUrl: './options-and-items.component.html',
    styleUrls: ['./options-and-items.component.css']
})
export class OptionsAndItemsComponent implements OnInit
{
    constructor() { }

    ngOnInit()
    {
    }

    setFactorioPath()
    {
        console.log('Set factorio path.');
    }

    setModPath()
    {
        console.log('Set mod path.');
    }

    toggleMods()
    {
        console.log('toggle mods.');
    }
}
