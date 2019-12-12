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

  // Return one single Category based off categoryId
  getSingleCategory(categoryId: string){
    return this.webRequestService.get(`categories/${categoryId}`);
  }

  // Update a Category
  updateCategory(categoryId: string, categoryName: string){
    return this.webRequestService.patch(`categories/${categoryId}`, categoryName )
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
  createRecipe(recipeName: string, ingredientsInfo: string, directions: string, recipeImage: File, recipeImageBlob:string, categoryId: string){

    let formData: any = new FormData();
    formData.append("recipeName", recipeName);
    formData.append("ingredientsInfo", ingredientsInfo);
    formData.append("directions", directions);
    formData.append("recipeImage", recipeImage);
    formData.append("recipeImageBlob", recipeImageBlob);


    return this.webRequestService.post(`categories/${categoryId}/recipes`,formData)
  }

  // Delete a Recipe
  deleteRecipe(categoryId: string, recipeId: string){
    return this.webRequestService.delete(`categories/${categoryId}/recipes/${recipeId}`);
  }

  // Update specified Recipe
  updateRecipe(categoryId: string, recipeId: string, recipeInfo: string){
    return this.webRequestService.patch(`categories/${categoryId}/recipes/${recipeId}`, recipeInfo)

  }

  // Get one Recipe based on recipeId
  getSingleRecipe(categoryId: string, recipeId: string){
    return this.webRequestService.get(`categories/${categoryId}/recipes/${recipeId}`);

  }
}

