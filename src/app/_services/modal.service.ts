import { ModalContainerComponent } from './../_modals/modal-container/modal-container.component';
import { Injectable, Type } from '@angular/core';

@Injectable()
export class ModalService
{
    private modalContainer: ModalContainerComponent;

    public setModalContainer(modalContainer: ModalContainerComponent): void
    {
        this.modalContainer = modalContainer;
    }

    public openModal(modal: Type<any>, data: any): void
    {
        this.modalContainer.open(modal, data);
    }

    public close(): void
    {
        this.modalContainer.close();
    }
}
