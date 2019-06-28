import { Ingredient } from '../recipes/shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService{

    ingredientAdded= new EventEmitter<Ingredient>();

    private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Tamatoes',10)
      ];


      getIngredients(){
          return this.ingredients.slice();
      }
}