import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeDetails } from './../../models/recipe.models';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.scss']
})
export class EditRecipesComponent implements OnInit {

  categoryId: string;
  recipeId: string;

  editRecipeForm = new FormGroup({
    recipeName: new FormControl(''),
    ingredientsInfo: new FormControl(''),
    directions: new FormControl('')
  });

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params['categoryId'];
      this.recipeId = params['recipeId'];
    })
  }

  updateRecipe(){
    let formData = this.editRecipeForm.value;
    
    this.recipeService.updateRecipe(this.categoryId, this.recipeId, formData).subscribe((newRecipe: RecipeDetails) => {
      // this.router.navigate(['../'], { relativeTo: this.route });
      this.router.navigate(['/categories', this.categoryId]);
    })

  }

}
