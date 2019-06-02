import { ModPathSelectorComponent } from './../_modals/mod-path-selector/mod-path-selector.component';
import { Component, OnInit } from '@angular/core';
import { ModelService } from '../_services/model.service';
import { ModalService } from './../_services/modal.service';
import { Mod } from './../_models/mod';
import { Item } from '../_models/item';
import { FactorioPathSelectorComponent } from '../_modals/factorio-path-selector/factorio-path-selector.component';
import { NAComponent } from '../_modals/na/na.component';

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
        this.modalService.openModal(FactorioPathSelectorComponent, {}).subscribe((result) =>
        {
            if (result.canceled)
            {
                return;
            }

            const reader = new FileReader();

            reader.onload = function (e)
            {
                const text = reader.result;
                console.log(text);
            };
            reader.readAsText(result.result.iconFiles[0]);
        });
    }

    setModPath()
    {
        this.modalService.openModal(ModPathSelectorComponent, {});
    }

    toggleMods()
    {
        this.modalService.openModal(NAComponent, {});
    }

    importSettings()
    {
        this.modalService.openModal(NAComponent, {});
    }

    exportSettings()
    {
        this.modalService.openModal(NAComponent, {});
    }
}
