import { RecipeDetails } from './models/recipe.models';
import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor( private webRequestService: WebRequestService) { }

  // Create a new Category
  createCategory(categoryName: string){
    return this.webRequestService.post('categories', { categoryName })
  }

  updateCategory(categoryId: string, categoryName: string){
    return this.webRequestService.patch(`categories/${categoryId}`, { categoryName })
  }

  // Get all created Categories
  getCategory(){
    return this.webRequestService.get('categories');
  }

  // Delete a specified Category
  deleteCategory(categoryId: string){
    return this.webRequestService.delete(`categories/${categoryId}`);
  }

  // Get Recipes for a certain Category
  getRecipes(categoryId: string){
    return this.webRequestService.get(`categories/${categoryId}/recipes`)
  }

  // Create a new Recipe
  createRecipe(recipeInfo: RecipeDetails, categoryId: string){
    return this.webRequestService.post(`categories/${categoryId}/recipes`,recipeInfo)
  }
}

