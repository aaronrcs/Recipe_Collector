import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {

  categories: any[];
  recipes: any[];

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      /**
       * Passing the active Params (categoryId) to getRecipes
       * to obtain all recipes for a certain Category
       */
      this.recipeService.getRecipes(params.categoryId).subscribe((recipes: any[]) => {
        this.recipes = recipes;
      })
    })

    // Subscribing to Observeable to get an array of all existing Categories
    this.recipeService.getCategory().subscribe((categories: any[]) => {
      this.categories = categories;
    })
  }

}
