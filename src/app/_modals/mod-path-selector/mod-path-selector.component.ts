import { ModalComponent } from '../../_interfaces/modalComponent';
import { Component, OnInit, Input } from '@angular/core';
import { ModalResult } from '../../_models/modalResult';
import { Observable, Subject } from 'rxjs';
import { ModalService } from '../../_services/modal.service';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
    selector: 'app-mod-path-selector',
    templateUrl: './mod-path-selector.component.html',
    styleUrls: ['./mod-path-selector.component.css']
})
export class ModPathSelectorComponent implements OnInit, ModalComponent
{
    private modalClosedSource: Subject<ModalResult> = new Subject<ModalResult>();

    modHelpText: string;
    modFiles: File[];
    modalClosed: Observable<ModalResult> = this.modalClosedSource.asObservable();
    @Input() data: any;

    constructor(public modalService: ModalService, private deviceService: DeviceDetectorService) { }

    ngOnInit()
    {
        this.modHelpText = 'Mods contain information about added/changed items and machines.<br>';

        if (!this.deviceService.isDesktop)
        {
            this.modHelpText += 'Example path: %AppData%\\Factorio\\mods<br>' +
                                'or C:\\Users\\username\\AppData\\Roaming\\Factorio\\mods';
        }
        else

        {
            switch (this.deviceService.os)
            {
                default:
                case 'UNKNOWN':
                case 'Windows': this.modHelpText += 'Example path: %AppData%\\Factorio\\mods<br>' +
                                                    'or C:\\Users\\username\\AppData\\Roaming\\Factorio\\mods';
                    break;
                case 'Mac': this.modHelpText += 'Example path: ~/Library/Application Support/factorio/mods';
                    break;
                case 'Linux':
                case 'Unix':
                case 'Chrome-OS': this.modHelpText += 'Example path: ~/.factorio/mods';
                    break;
            }
        }
    }

    onModPathChange(event)
    {
        this.modFiles = event.target.files;
    }

    onOKClick()
    {
        this.modalClosedSource.next(new ModalResult(false, { modFiles: this.modFiles }));
        this.modalService.close();
    }

    onCancelClick()
    {
        this.modalClosedSource.next(new ModalResult(true));
        this.modalService.close();
    }
}
