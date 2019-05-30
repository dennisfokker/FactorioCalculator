import { ModalService } from './../../_services/modal.service';
import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { ModalDirective } from './../../_directives/modal.directive';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
    private componentRef: any;
    @ViewChild(ModalDirective, {}) modalContainer: ModalDirective;

    constructor(private resolver: ComponentFactoryResolver,
                public modalService: ModalService) { }

    ngOnInit()
    {
        this.modalService.setModalContainer(this);
    }

    public open(modal: Type<any>, data: any): void
    {
        this.modalContainer.viewContainerRef.clear();
        const factory = this.resolver.resolveComponentFactory(modal);
        this.componentRef = this.modalContainer.viewContainerRef.createComponent(factory);
        this.componentRef.instance.data = data;
    }

    public close(): void
    {
        this.componentRef.destroy();
        this.componentRef = null;
    }
}
