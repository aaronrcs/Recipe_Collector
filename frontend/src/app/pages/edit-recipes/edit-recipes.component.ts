import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RecipeDetails } from './../../models/recipe.models';

@Component({
  selector: 'app-edit-recipes',
  templateUrl: './edit-recipes.component.html',
  styleUrls: ['./edit-recipes.component.scss']
})
export class EditRecipesComponent implements OnInit {

  categoryId: string;
  recipeId: string;
  singleRecipeInfo: RecipeDetails;
  recipes: RecipeDetails;

  recipeImageBlob: string;
  newRecipeImageBlob: string;
  imageFileName: string;
  notEmptyFile = true;
  recipeImagePath: string;

  editRecipeForm = new FormGroup({
    recipeName: new FormControl(''),
    ingredientsInfo: new FormControl(''),
    directions: new FormControl(''),
    recipeImage: new FormControl(null),
    recipeImageBlob: new FormControl('')
  });
  

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, public fb: FormBuilder) { }

  // editRecipeForm = this.fb.group({
  //   recipeName: [''],
  //   ingredientsInfo: [''],
  //   directions: [''],
  //   recipeImage: [null],
  //   recipeImageBlob: [null]
  // });

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params['categoryId'];
      this.recipeId = params['recipeId'];

      this.recipeService.getSingleRecipe(this.categoryId, this.recipeId).subscribe((singleRecipe: RecipeDetails) => {
        this.singleRecipeInfo = singleRecipe;
        this.recipeImageBlob = this.singleRecipeInfo.recipeImageBlob
        this.recipeImagePath = this.singleRecipeInfo.recipeImage

        // Using 'setValue' to set the value of each input with the specified information
        // This will will help when using wants edit/update any recipes they created
        this.editRecipeForm.setValue({
          recipeName: this.singleRecipeInfo.recipeName,
          ingredientsInfo: this.singleRecipeInfo.ingredientsInfo,
          directions: this.singleRecipeInfo.directions,
          recipeImage: this.singleRecipeInfo.recipeImage,
          recipeImageBlob: this.recipeImageBlob
        });

      })

    })
  }

  fileChanged(e) {
    this.notEmptyFile = false;
    const file = (e.target as HTMLInputElement).files[0];
    let path = this.recipeImagePath.substring(0,29)
    let fullPath = path + file.name;

    this.imageFileName = file.name;

    this.editRecipeForm.patchValue({
      recipeImage: fullPath
    });

    // console.log("Path: ", fullPath);

    // this.editRecipeForm.get("recipeImage").setValue(fullPath);

    // this.editRecipeForm.get('recipeImage').updateValueAndValidity();

    // // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.recipeImageBlob = reader.result as string;
      // Getting newly created Blob of updated image
      this.editRecipeForm.get("recipeImageBlob").setValue(this.recipeImageBlob);
      this.editRecipeForm.get('recipeImageBlob').updateValueAndValidity();
    }
    reader.readAsDataURL(file)

  }

  cancel(){
    this.router.navigate(['/categories', this.categoryId]);
  }

  updateRecipe(){
    let formData = this.editRecipeForm.value;
    
    this.recipeService.updateRecipe(this.categoryId, this.recipeId, formData).subscribe((newRecipe: RecipeDetails) => {
      // this.router.navigate(['../'], { relativeTo: this.route });
      this.router.navigate(['/categories', this.categoryId]);
    })

  }

}
