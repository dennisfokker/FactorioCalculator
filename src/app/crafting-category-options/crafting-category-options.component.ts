import { RecipeCategory } from '../_models/factorio/recipeCategory';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-crafting-category-options',
    templateUrl: './crafting-category-options.component.html',
    styleUrls: ['./crafting-category-options.component.css']
})
export class CraftingCategoryOptionsComponent implements OnInit, AfterViewInit
{
    @ViewChild('categoryListContainer') categoryListContainer: ElementRef;
    @Input() id: number;
    @Input() craftingCategory: RecipeCategory;
    collapsed: boolean = false;
    listCalculatedHeight: string = null;

    constructor() { }

    ngOnInit(): void
    {
    }

    ngAfterViewInit(): void
    {
        this.categoryListContainer.nativeElement.style.height = this.categoryListContainer.nativeElement.offsetHeight + 'px';
    }

    getCategoryListContainerHeight(): string
    {
        if (this.listCalculatedHeight == null)
        {
            return 'auto';
        }

        return this.collapsed ? '0px' : this.listCalculatedHeight;
    }

    categoryListContainerCollapseClick()
    {
        this.collapsed = !this.collapsed;

        if (this.listCalculatedHeight == null)
        {
            this.listCalculatedHeight = this.categoryListContainer.nativeElement.offsetHeight + 'px';
        }
    }
}
