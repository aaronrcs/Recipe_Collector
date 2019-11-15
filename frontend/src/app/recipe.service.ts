import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor( private webRequestService: WebRequestService) { }

  // Create a Category
  createCategory(categoryName: string){
    return this.webRequestService.post('categories', { categoryName })
  }

  // Get all created Categories
  getCategory(){
    return this.webRequestService.get('categories');
  }

  // Get Recipes for a certain Category
  getRecipes(categoryId: string){
    return this.webRequestService.get(`categories/${categoryId}/recipes`)
  }
}

