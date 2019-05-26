import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Ingredient } from '../_models/ingredient';

@Component({
    selector: 'app-recipe-options',
    templateUrl: './recipe-options.component.html',
    styleUrls: ['./recipe-options.component.css']
})
export class RecipeOptionsComponent implements OnInit, AfterViewInit
{
    @ViewChild('ingedientListContainer') ingedientListContainer: ElementRef;
    @Input() id: number;
    @Input() ingredient: Ingredient;
    collapsed: boolean = false;
    listCalculatedHeight: string = null;

    constructor() { }

    ngOnInit()
    {
    }

    ngAfterViewInit(): void
    {
        if (this.ingedientListContainer) {
            this.ingedientListContainer.nativeElement.style.height = this.ingedientListContainer.nativeElement.offsetHeight + 'px';
        }
    }

    getRecipeListContainerHeight(): string
    {
        if (this.listCalculatedHeight == null) {
            return 'auto';
        }

        return this.collapsed ? '0px' : this.listCalculatedHeight;
    }

    recipeListContainerCollapseClick()
    {
        if (this.ingredient.recipe.ingredients.length <= 0)
            return;

        this.collapsed = !this.collapsed;

        if (this.listCalculatedHeight == null) {
            this.listCalculatedHeight = this.ingedientListContainer.nativeElement.offsetHeight + 'px';
        }
    }
}
