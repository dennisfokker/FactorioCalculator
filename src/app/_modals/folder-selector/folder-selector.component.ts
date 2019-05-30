import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-folder-selector',
    templateUrl: './folder-selector.component.html',
    styleUrls: ['./folder-selector.component.css']
})
export class FolderSelectorComponent implements OnInit
{
    @Input() data: any;

    constructor()
    { }

    ngOnInit()
    {
    }

    onPathChange(event)
    {
        this.data.path = event.target.value;
    }

    onNoClick()
    {
    }
}
