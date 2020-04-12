import { ModalComponent } from '../../_interfaces/modalComponent';
import { Component, OnInit, Input } from '@angular/core';
import { ModalResult } from '../../_models/modalResult';
import { Observable, Subject } from 'rxjs';
import { ModalService } from '../../_services/modal.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
    selector: 'app-factorio-path-selector',
    templateUrl: './factorio-path-selector.component.html',
    styleUrls: ['./factorio-path-selector.component.css']
})
export class FactorioPathSelectorComponent implements OnInit, ModalComponent
{
    private modalClosedSource: Subject<ModalResult> = new Subject<ModalResult>();

    recipesHelpPath: string;
    prototypeHelpPath: string;
    iconHelpPath: string;
    recipesFile: File;
    prototypeFiles: File[];
    iconFiles: File[];
    modalClosed: Observable<ModalResult> = this.modalClosedSource.asObservable();
    @Input() data: any;

    constructor(public modalService: ModalService, private deviceService: DeviceDetectorService) { }

    ngOnInit()
    {
        this.recipesHelpPath = 'Recipes provide the different recipes to create each item.<br>';
        this.prototypeHelpPath = 'Prototypes provide all item and machine information.<br>';
        this.iconHelpPath = 'Icons are used to visualise items and machines.<br>';

        if (!this.deviceService.isDesktop) {
            this.recipesHelpPath += 'Example path: %Appdata%\\Factorio\\script-output\\recipes.json';
            this.prototypeHelpPath += 'Example path: C:\\Program Files\\Steam\\steamApps\\common\\Factorio\\data\\base\\prototypes';
            this.iconHelpPath += 'Example path: C:\\Program Files\\Steam\\steamApps\\common\\Factorio\\data\\base\\graphics\\icons';
        }
        else
        {
            switch (this.deviceService.os) {
                default:
                case 'UNKNOWN':
                case 'Windows': this.recipesHelpPath += 'Example path: %Appdata%\\Factorio\\script-output\\recipes.json<br>' +
                                                        'or C:\\Users\\username\\AppData\\Roaming\\Factorio\\script-output\\recipes.json<br>';
                                this.prototypeHelpPath += 'Example path: C:\\Program Files\\Steam\\steamApps\\common\\Factorio\\data\\base\\prototypes';
                                this.iconHelpPath += 'Example path: C:\\Program Files\\Steam\\steamApps\\common\\Factorio\\data\\base\\graphics\\icons';
                    break;
                case 'Mac': this.recipesHelpPath += 'Example path: ~/Library/Application Support/factorio/script-output/recipes.json';
                            this.prototypeHelpPath += 'Example path: ~/Library/Application Support/Steam/steamapps/common/Factorio/factorio.app/Contents/data/base/prototypes';
                            this.iconHelpPath += 'Example path: ~/Library/Application Support/Steam/steamapps/common/Factorio/factorio.app/Contents/data/base/graphics/icons';
                    break;
                case 'Linux':
                case 'Unix':
                case 'Chrome-OS': this.recipesHelpPath += 'Example path: ~/.factorio/script-output/recipes.json';
                                  this.prototypeHelpPath += 'Example path: ~/.factorio/data/base/prototypes';
                                  this.iconHelpPath += 'Example path: ~/.factorio/data/base/graphics/icons';
                    break;
            }
        }
    }

    onRecipesFileChange(event)
    {
        this.recipesFile = event.target.files.length > 0 ? event.target.files[0] : null;
    }

    onPrototypePathChange(event)
    {
        this.prototypeFiles = event.target.files;
    }

    onIconPathChange(event)
    {
        this.iconFiles = event.target.files;
    }

    onOKClick()
    {
        this.modalClosedSource.next(new ModalResult(false, { recipesFile: this.recipesFile, prototypeFiles: this.prototypeFiles, iconFiles: this.iconFiles }));
        this.modalService.close();
    }

    onCancelClick()
    {
        this.modalClosedSource.next(new ModalResult(true));
        this.modalService.close();
    }
}
