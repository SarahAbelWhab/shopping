import { Ingredient } from './../shared/ingredients.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Bananas',10),
  ]
  ingredientToEdit:Ingredient;


  onAddingIngredient(ingredient:Ingredient){
  this.ingredients.splice(0,0,ingredient);
  }
  editIngredient(ingredientEle){
    this.ingredientToEdit = ingredientEle;
  }
  onEditingIngredient(ingredient:Ingredient){
    console.log(ingredient);
    this.ingredients.splice(0,0,ingredient);
    
  }
}
