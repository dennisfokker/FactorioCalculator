import { ModalContainerComponent } from './../_modals/modal-container/modal-container.component';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalResult } from '../_models/modalResult';

@Injectable()
export class ModalService
{
    private modalContainer: ModalContainerComponent;

    public setModalContainer(modalContainer: ModalContainerComponent): void
    {
        this.modalContainer = modalContainer;
    }

    public openModal(modal: Type<any>, data: any): Observable<ModalResult>
    {
        return this.modalContainer.open(modal, data);
    }

    public close(): void
    {
        this.modalContainer.close();
    }
}
