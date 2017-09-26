import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Description content 1',
      'http://www.seriouseats' +
      '.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 3),
        new Ingredient('Cheese', 1)
      ]
    ),
    new Recipe(
      'Recipe 2',
      'Description content 2',
      'http://www.seriouseats' +
      '.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Tomato', 2),
        new Ingredient('Potato', 3),
        new Ingredient('Pepper', 2)
      ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {

  }
  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
