import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_models/recipe';
import { Item } from '../_models/item';
import { Result } from '../_models/result';
import { Ingredient } from '../_models/ingredient';
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

    constructor(public modelService: ModelService)
    {
        modelService.ingredientsChanged.subscribe((ingredients) => this.ingredients = ingredients);
    }

    ngOnInit()
    {
        const result = new Result(new Item());
        const ingredientResult = new Result(new Item('Iron plate', 'iron-plate.png'));
        const recipe = new Recipe([result], undefined, undefined,
            [
                new Ingredient(ingredientResult.item, new Recipe(
                    [
                        ingredientResult, ingredientResult
                    ])),
                new Ingredient(ingredientResult.item, new Recipe(
                    [
                        ingredientResult, ingredientResult
                    ]))
            ]);
        const recipe2 = new Recipe([result], undefined, undefined,
            [
                new Ingredient(ingredientResult.item, new Recipe(
                    [
                        ingredientResult, ingredientResult
                    ], 'Iron plate', undefined,
                    [
                        new Ingredient(ingredientResult.item, new Recipe(
                            [
                                ingredientResult, ingredientResult
                            ]))
                    ]), 5)
            ]);

        this.ingredients = [new Ingredient(result.item, recipe), new Ingredient(result.item, recipe)];
        this.sharedIngredients = [new Ingredient(result.item, recipe), new Ingredient(result.item, recipe2)];
    }

}
