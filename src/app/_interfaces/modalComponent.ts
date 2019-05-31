import { ModalResult } from './../_models/modalResult';
import { Observable } from 'rxjs';
export interface ModalComponent
{
    data: any;
    modalClosed: Observable<ModalResult>;
}
