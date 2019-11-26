import { RecipeDetails } from './../../models/recipe.models';
import { RecipeService } from 'src/app/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  categoryId: string;

  recipeForm = new FormGroup({
    recipeName: new FormControl(''),
    ingredientsInfo: new FormControl(''),
    directions: new FormControl('')
  });

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params['categoryId'];
    })
  }

  createRecipe(){
    let formData = this.recipeForm.value;
    
    this.recipeService.createRecipe(formData, this.categoryId).subscribe((newRecipe: RecipeDetails) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })

  }

}
