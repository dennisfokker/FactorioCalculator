import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-folder-selector',
    templateUrl: './folder-selector.component.html',
    styleUrls: ['./folder-selector.component.css']
})
export class FolderSelectorComponent implements OnInit
{
    data: any;

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
