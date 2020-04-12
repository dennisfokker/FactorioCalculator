import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_models/factorio/recipe';
import { Item } from '../_models/factorio/item';
import { Result } from '../_models/factorio/result';
import { Ingredient } from '../_models/factorio/ingredient';
import { ModelService } from '../_services/model.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit
{
    ingredients: Ingredient[] = [];
    sharedIngredients: Ingredient[] = [];

    constructor(public modelService: ModelService) { }

    ngOnInit()
    {
        const result = new Result(new Item('Iron storage box', '__Unknown__.png', undefined));
        const ingredientResult = new Result(new Item('Iron plate', 'iron-plate.png', undefined));
        const recipe = new Recipe('Iron storage box', 1, undefined,
            [
                new Ingredient(ingredientResult.item, 1, new Recipe('Iron plate', 1, undefined, [],
                    [
                        ingredientResult, ingredientResult
                    ])),
                new Ingredient(ingredientResult.item, 1, new Recipe('Iron plate', 1, undefined, [],
                    [
                        ingredientResult, ingredientResult
                    ]))
            ], [result]);
        const recipe2 = new Recipe('Copper cable', 1, undefined,
            [
                new Ingredient(new Item('Copper cable', 'copper-cable.png', undefined), 5, new Recipe('Copper plate', 1, undefined,
                    [
                        new Ingredient(new Item('Copper plate', 'copper-plate.png', undefined), 2, new Recipe('Copper ore', 1, undefined,
                            [
                                new Ingredient(new Item('Copper ore', 'copper-ore.png', undefined), 5, new Recipe('Iron plate', 1, undefined, [],
                                    [
                                        ingredientResult, ingredientResult
                                    ]))
                            ],
                            [
                                ingredientResult, ingredientResult
                            ]))
                    ],
                    [
                        ingredientResult, ingredientResult
                    ]))
            ], [result]);

        this.ingredients = [new Ingredient(result.item, 1, recipe), new Ingredient(result.item, 1, recipe)];
        this.sharedIngredients = [new Ingredient(result.item, 1, recipe), new Ingredient(result.item, 1, recipe2)];
    }

}
