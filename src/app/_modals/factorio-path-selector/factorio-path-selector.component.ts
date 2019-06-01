import { ModalComponent } from '../../_interfaces/modalComponent';
import { Component, OnInit, Input } from '@angular/core';
import { ModalResult } from '../../_models/modalResult';
import { Observable, Subject } from 'rxjs';
import { ModalService } from '../../_services/modal.service';

@Component({
    selector: 'app-factorio-path-selector',
    templateUrl: './factorio-path-selector.component.html',
    styleUrls: ['./factorio-path-selector.component.css']
})
export class FactorioPathSelectorComponent implements OnInit, ModalComponent
{
    private modalClosedSource: Subject<ModalResult> = new Subject<ModalResult>();

    prototypeFiles: File[];
    iconFiles: File[];
    modalClosed: Observable<ModalResult> = this.modalClosedSource.asObservable();
    @Input() data: any;

    constructor(public modalService: ModalService) { }

    ngOnInit()
    {
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
