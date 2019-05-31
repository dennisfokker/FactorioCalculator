import { ModalComponent } from './../../_interfaces/modalComponent';
import { Component, OnInit, Input } from '@angular/core';
import { ModalResult } from './../../_models/modalResult';
import { Observable, Subject } from 'rxjs';
import { ModalService } from './../../_services/modal.service';

@Component({
    selector: 'app-folder-selector',
    templateUrl: './folder-selector.component.html',
    styleUrls: ['./folder-selector.component.css']
})
export class FolderSelectorComponent implements OnInit, ModalComponent
{
    private modalClosedSource: Subject<ModalResult> = new Subject<ModalResult>();

    files: File[];
    modalClosed: Observable<ModalResult> = this.modalClosedSource.asObservable();
    @Input() data: any;

    constructor(public modalService: ModalService) { }

    ngOnInit()
    {
    }

    onPathChange(event)
    {
        this.files = event.target.files;
    }

    onOKClick()
    {
        this.modalClosedSource.next(new ModalResult(false, { files: this.files }));
        this.modalService.close();
    }

    onCancelClick()
    {
        this.modalClosedSource.next(new ModalResult());
        this.modalService.close();
    }
}
