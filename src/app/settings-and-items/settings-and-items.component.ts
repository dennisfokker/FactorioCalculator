import { Component, OnInit } from '@angular/core';
import { ModelService } from '../_services/model.service';
import { ModalService } from './../_services/modal.service';
import { FolderSelectorComponent } from './../_modals/folder-selector/folder-selector.component';
import { Mod } from './../_models/mod';
import { Item } from '../_models/item';

@Component({
    selector: 'app-settings-and-items',
    templateUrl: './settings-and-items.component.html',
    styleUrls: ['./settings-and-items.component.css']
})
export class SettingsAndItemsComponent implements OnInit
{
    path: string;
    mods: Mod[] = [];

    constructor(public modelService: ModelService,
                public modalService: ModalService)
    {
        modelService.modsChanged.subscribe((mods) => this.mods = mods);
    }

    ngOnInit()
    {
        this.mods.push(new Mod('Base Factorio', [new Item('Iron plate', 'iron-plate.png'), new Item('Copper cable', 'copper-cable.png', true, 5)]));
        this.mods.push(new Mod('Bob\'s Metals, Chemicals and Intermediates', [new Item('Aluminum plate')]));
    }

    setFactorioPath()
    {
        console.log('Set factorio path.');
        /*const dialogRef = this.dialog.open(FolderSelectorComponent, {
            width: '250px',
            data: { action: 'Factorio install path', path: this.path }
        });

        dialogRef.afterClosed().subscribe(result =>
        {
            this.path = result;
        });*/
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

    closeModal(id: string)
    {
        this.modalService.close(id);
    }
}
