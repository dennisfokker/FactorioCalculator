import { ItemGroup } from './../_models/factorio/ItemGroup';
import { Result } from '../_models/factorio/result';
import { RecipeCategory } from '../_models/factorio/recipeCategory';
import { Ingredient } from '../_models/factorio/ingredient';
import { Injectable } from '@angular/core';
import { Item } from '../_models/factorio/item';
import { CraftingMachine } from '../_models/factorio/craftingMachine';
import { Recipe } from '../_models/factorio/recipe';
import { Subject ,  Observable } from 'rxjs';
import { Indexable } from '../_interfaces/indexable';

@Injectable()
export class ModelService
{
    private machinesChangedSource: Subject<CraftingMachine[]> = new Subject<CraftingMachine[]>();
    private itemsChangedSource: Subject<Item[]> = new Subject<Item[]>();
    private itemGroupsChangedSource: Subject<ItemGroup[]> = new Subject<ItemGroup[]>();
    private recipesChangedSource: Subject<Recipe[]> = new Subject<Recipe[]>();
    private craftingCategoriesChangedSource: Subject<RecipeCategory[]> = new Subject<RecipeCategory[]>();

    public machinesChanged: Observable<CraftingMachine[]> = this.machinesChangedSource.asObservable();
    public itemsChanged: Observable<Item[]> = this.itemsChangedSource.asObservable();
    public itemGroupsChanged: Observable<ItemGroup[]> = this.itemGroupsChangedSource.asObservable();
    public recipesChanged: Observable<Recipe[]> = this.recipesChangedSource.asObservable();
    public craftingCategoriesChanged: Observable<RecipeCategory[]> = this.craftingCategoriesChangedSource.asObservable();

    public machinesList: CraftingMachine[] = [];
    public itemsList: Item[] = [];
    public itemGroupsList: ItemGroup[] = [];
    public recipesList: Recipe[] = [];
    public craftingCategoriesList: RecipeCategory[] = [];

    public machines: { [name: string]: CraftingMachine } = {};
    public items: { [name: string]: Item } = {};
    public itemGroups: { [name: string]: ItemGroup } = {};
    public recipes: { [name: string]: Recipe } = {};
    public craftingCategories: { [name: string]: RecipeCategory } = {};

    constructor()
    {
        this.machinesChanged.subscribe((machines) =>
        {
            this.machines = {};
            this.updateDictionary(this.machines, machines);
        });
        this.itemsChanged.subscribe((items) =>
        {
            this.items = {};
            this.updateDictionary(this.items, items);
        });
        this.itemGroupsChanged.subscribe((itemGroups) =>
        {
            this.itemGroups = {};
            this.updateDictionary(this.itemGroups, itemGroups);
        });
        this.recipesChanged.subscribe((recipes) =>
        {
            this.recipes = {};
            this.updateDictionary(this.recipes, recipes);
        });
        this.craftingCategoriesChanged.subscribe((craftingCategories) => {
            this.craftingCategories = {};
            this.updateDictionary(this.craftingCategories, craftingCategories);
        });
    }

    //#region Model updating functions
    public updateRecipesJSON(recipesJSON: any)
    {
        /*recipesJSON.forEach(elem =>
        {
            // Keep track of constructor values
            const results: Result[] = [];
            const ingredients: Ingredient[] = [];
            const name: string = elem.name;
            const category: string = 'crafting';
            const energyRequired: number = 0.5;

            const recipe: Recipe = new Recipe();
            console.log(elem);
        });*/

        this.listsChanged();
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
    //#endregion

    //#region Internal updating functions
    private updateDictionary<T extends Indexable>(dict: { [name: string]: T }, list: T[])
    {
        list.forEach(element =>
        {
            dict[element.name] = element;
        });
    }

    private listsChanged()
    {
        this.machinesChangedSource.next(this.machinesList);
        this.itemsChangedSource.next(this.itemsList);
        this.itemGroupsChangedSource.next(this.itemGroupsList);
        this.recipesChangedSource.next(this.recipesList);
        this.craftingCategoriesChangedSource.next(this.craftingCategoriesList);
    }
    //#endregion
}
