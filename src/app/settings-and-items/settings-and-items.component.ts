import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings-and-items',
    templateUrl: './settings-and-items.component.html',
    styleUrls: ['./settings-and-items.component.css']
})
export class SettingsAndItemsComponent implements OnInit
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
