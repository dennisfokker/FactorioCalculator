import { ItemGroupOption } from './../_models/options/itemGroupOption';
import { ItemGroup } from './../_models/factorio/ItemGroup';
import { Item } from './../_models/factorio/item';
import { ModelService } from './../_services/model.service';
import { ModPathSelectorComponent } from './../_modals/mod-path-selector/mod-path-selector.component';
import { Component, OnInit } from '@angular/core';
import { ModalService } from './../_services/modal.service';
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
    itemGroupOptions: ItemGroupOption[] = [];

    constructor(public modelService: ModelService,
                public modalService: ModalService)
    {
        modelService.itemGroupsChanged.subscribe((itemGroups) => this.itemGroupOptions = itemGroups.map((itemGroup) => itemGroup.toOption(modelService)));
    }

    ngOnInit()
    {
        this.itemGroupOptions.push(new ItemGroup('Intermediates', undefined, [new Item('Iron plate', 'iron-plate.png', 'Intermediates'), new Item('Copper cable', 'copper-cable.png', 'Intermediates')]).toOption(this.modelService));
        this.itemGroupOptions.push(new ItemGroup('Bob\'s intermediates', undefined, [new Item('Aluminum plate', '__Unknown__.png', 'Bob\'s intermediates')]).toOption(this.modelService));
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
            reader.onload = (e) =>
            {
                if (typeof reader.result === 'string')
                {
                    this.modelService.updateRecipesJSON(JSON.parse(reader.result));
                }
            };
            reader.readAsText(result.result.recipesFile);
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
