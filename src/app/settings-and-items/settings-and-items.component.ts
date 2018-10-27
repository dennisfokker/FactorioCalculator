import { Mod } from './../_models/mod';
import { Component, OnInit } from '@angular/core';
import { Item } from '../_models/item';

@Component({
    selector: 'app-settings-and-items',
    templateUrl: './settings-and-items.component.html',
    styleUrls: ['./settings-and-items.component.css']
})
export class SettingsAndItemsComponent implements OnInit
{
    mods: Mod[] = [];

    constructor() { }

    ngOnInit()
    {
        this.mods.push(new Mod('base', [new Item('Very obnoxiously long name how this work lol will it?.'), new Item('Very obnoxiously long name how this work lol will it?.'), new Item(), new Item(), new Item()]));
        this.mods.push(new Mod('not base', [new Item('Very obnoxiously long name how this work lol will it?.'), new Item(), new Item(), new Item(), new Item(), new Item('Very obnoxiously long name how this work lol will it?.')]));
        this.mods.push(new Mod('also not base', [new Item(), new Item(), new Item(), new Item(), new Item(), new Item(), new Item(), new Item()]));
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

    importSettings()
    {
        console.log('import settings.');
    }

    exportSettings()
    {
        console.log('export settings.');
    }
}
