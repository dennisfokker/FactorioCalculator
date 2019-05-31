import { ModalService } from './../../_services/modal.service';
import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ComponentRef } from '@angular/core';
import { ModalDirective } from './../../_directives/modal.directive';
import { ModalComponent } from './../../_interfaces/modalComponent';
import { Observable } from 'rxjs';
import { ModalResult } from './../../_models/modalResult';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
    componentRef: ComponentRef<ModalComponent>;
    @ViewChild(ModalDirective, {}) modalContainer: ModalDirective;

    constructor(private resolver: ComponentFactoryResolver,
                public modalService: ModalService) { }

    ngOnInit()
    {
        this.modalService.setModalContainer(this);
    }

    public open(modal: Type<ModalComponent>, data: any): Observable<ModalResult>
    {
        this.modalContainer.viewContainerRef.clear();
        const factory = this.resolver.resolveComponentFactory(modal);
        this.componentRef = this.modalContainer.viewContainerRef.createComponent(factory);
        this.componentRef.instance.data = data;
        return this.componentRef.instance.modalClosed;
    }

    public close(): void
    {
        this.componentRef.destroy();
        this.componentRef = null;
    }
}
