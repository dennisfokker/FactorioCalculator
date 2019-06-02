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

    prototypeHelpPath: string;
    iconHelpPath: string;
    prototypeFiles: File[];
    iconFiles: File[];
    modalClosed: Observable<ModalResult> = this.modalClosedSource.asObservable();
    @Input() data: any;

    constructor(public modalService: ModalService, private deviceService: DeviceDetectorService) { }

    ngOnInit()
    {
        this.prototypeHelpPath = 'Prototypes provide all item and machine information.<br>';
        this.iconHelpPath = 'Icons are used to visualise items and machines.<br>';

        if (!this.deviceService.isDesktop) {
            this.prototypeHelpPath += 'Example path: C:\\Program Files\\Steam\\steamApps\\common\\Factorio\\data\\base\\prototypes';
            this.iconHelpPath += 'Example path: C:\\Program Files\\Steam\\steamApps\\common\\Factorio\\data\\base\\graphics\\icons';
        }
        else
        {
            switch (this.deviceService.os) {
                default:
                case 'UNKNOWN':
                case 'Windows': this.prototypeHelpPath += 'Example path: C:\\Program Files\\Steam\\steamApps\\common\\Factorio\\data\\base\\prototypes';
                                this.iconHelpPath += 'Example path: C:\\Program Files\\Steam\\steamApps\\common\\Factorio\\data\\base\\graphics\\icons';
                    break;
                case 'Mac': this.prototypeHelpPath += 'Example path: ~/Library/Application Support/Steam/steamapps/common/Factorio/factorio.app/Contents/data/base/prototypes';
                            this.iconHelpPath += 'Example path: ~/Library/Application Support/Steam/steamapps/common/Factorio/factorio.app/Contents/data/base/graphics/icons';
                    break;
                case 'Linux':
                case 'Unix':
                case 'Chrome-OS': this.prototypeHelpPath += 'Example path: ~/.factorio/data/base/prototypes';
                                  this.iconHelpPath += 'Example path: ~/.factorio/data/base/graphics/icons';
                    break;
            }
        }
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
        this.modalClosedSource.next(new ModalResult(false, { prototypeFiles: this.prototypeFiles, iconFiles: this.iconFiles }));
        this.modalService.close();
    }

    onCancelClick()
    {
        this.modalClosedSource.next(new ModalResult());
        this.modalService.close();
    }
}
