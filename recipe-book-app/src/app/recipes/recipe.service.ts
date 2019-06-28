import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {

  recipeSelected= new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe1', 'Desc  of test recipe 1', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test recipe2', 'Desc  of test recipe 2', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg'),
    new Recipe('Test recipe3', 'Desc  of test recipe 3', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Test recipe4', 'Desc  of test recipe 4', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}