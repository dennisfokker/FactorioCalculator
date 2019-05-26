import { Result } from './../_models/result';
import { CraftingCategory } from './../_models/craftingCategory';
import { Ingredient } from './../_models/ingredient';
import { Injectable } from '@angular/core';
import { Item } from '../_models/item';
import { Machine } from '../_models/machine';
import { Mod } from '../_models/mod';
import { Recipe } from '../_models/recipe';
import { Subject ,  Observable } from 'rxjs';
import { Indexable } from '../_interfaces/indexable';

@Injectable()
export class ModelService
{
    private craftingCategoriesChangedSource: Subject<CraftingCategory[]> = new Subject<CraftingCategory[]>();
    private ingredientsChangedSource: Subject<Ingredient[]> = new Subject<Ingredient[]>();
    private itemsChangedSource: Subject<Item[]> = new Subject<Item[]>();
    private machinesChangedSource: Subject<Machine[]> = new Subject<Machine[]>();
    private modsChangedSource: Subject<Mod[]> = new Subject<Mod[]>();
    private recipesChangedSource: Subject<Recipe[]> = new Subject<Recipe[]>();
    private resultsChangedSource: Subject<Result[]> = new Subject<Result[]>();

    public craftingCategoriesChanged: Observable<CraftingCategory[]> = this.craftingCategoriesChangedSource.asObservable();
    public ingredientsChanged: Observable<Ingredient[]> = this.ingredientsChangedSource.asObservable();
    public itemsChanged: Observable<Item[]> = this.itemsChangedSource.asObservable();
    public machinesChanged: Observable<Machine[]> = this.machinesChangedSource.asObservable();
    public modsChanged: Observable<Mod[]> = this.modsChangedSource.asObservable();
    public recipesChanged: Observable<Recipe[]> = this.recipesChangedSource.asObservable();
    public resultsChanged: Observable<Result[]> = this.resultsChangedSource.asObservable();

    public craftingCategoriesList: CraftingCategory[] = [];
    public ingredientsList: Ingredient[] = [];
    public itemsList: Item[] = [];
    public machinesList: Machine[] = [];
    public modsList: Mod[] = [];
    public recipesList: Recipe[] = [];
    public resultsList: Result[] = [];

    public craftingCategories: { [name: string]: CraftingCategory } = {};
    public ingredients: { [name: string]: Ingredient } = {};
    public items: { [name: string]: Item } = {};
    public machines: { [name: string]: Machine } = {};
    public mods: { [name: string]: Mod } = {};
    public recipes: { [name: string]: Recipe } = {};
    public results: { [name: string]: Result } = {};

    constructor()
    {
        this.craftingCategoriesChanged.subscribe((craftingCategories) => {
            this.craftingCategories = {};
            this.updateDictionary(this.craftingCategories, craftingCategories);
        });
        this.ingredientsChanged.subscribe((ingredients) =>
        {
            this.ingredients = {};
            this.updateDictionary(this.ingredients, ingredients);
        });
        this.itemsChanged.subscribe((items) =>
        {
            this.items = {};
            this.updateDictionary(this.items, items);
        });
        this.machinesChanged.subscribe((machines) =>
        {
            this.machines = {};
            this.updateDictionary(this.machines, machines);
        });
        this.modsChanged.subscribe((mods) =>
        {
            this.mods = {};
            this.updateDictionary(this.mods, mods);
        });
        this.recipesChanged.subscribe((recipes) =>
        {
            this.recipes = {};
            this.updateDictionary(this.recipes, recipes);
        });
        this.resultsChanged.subscribe((results) =>
        {
            this.results = {};
            this.updateDictionary(this.results, results);
        });
    }

    public updateFactorioPath(path: string)
    {
        //const copperOreItem = new Item('Copper ore', 'copper-ore.png');

        this.listsChanged();
    }

    public updateModsPath(path: string)
    {
        // Fill in later

        this.listsChanged();
    }

    private updateDictionary<T extends Indexable>(dict: { [name: string]: T }, list: T[])
    {
        list.forEach(element =>
        {
            dict[element.name] = element;
        });
    }

    private listsChanged()
    {
        this.craftingCategoriesChangedSource.next(this.craftingCategoriesList);
        this.ingredientsChangedSource.next(this.ingredientsList);
        this.itemsChangedSource.next(this.itemsList);
        this.machinesChangedSource.next(this.machinesList);
        this.modsChangedSource.next(this.modsList);
        this.recipesChangedSource.next(this.recipesList);
        this.resultsChangedSource.next(this.resultsList);
    }
}
