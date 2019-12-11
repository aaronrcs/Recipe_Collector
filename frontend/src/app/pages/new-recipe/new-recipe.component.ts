import { RecipeDetails } from './../../models/recipe.models';
import { RecipeService } from 'src/app/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  categoryId: string;
  recipeImageBlob: string;
  imageFileName: string;
  notEmptyFile = true;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, public fb: FormBuilder,) { }

  // recipeForm = new FormGroup({
  //   recipeName: new FormControl(''),
  //   ingredientsInfo: new FormControl(''),
  //   directions: new FormControl(''),
  //   recipeImage: new FormControl(null)
  // });

  recipeForm = this.fb.group({
    recipeName: [''],
    ingredientsInfo: [''],
    directions: [''],
    recipeImage: [null]
  });

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.categoryId = params['categoryId'];
    })
  }

  fileChanged(e) {
    this.notEmptyFile = false;
    const file = (e.target as HTMLInputElement).files[0];
        
    this.imageFileName = file.name;

    this.recipeForm.patchValue({
      recipeImage: file
    });

    this.recipeForm.get('recipeImage').updateValueAndValidity();

    // // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.recipeImageBlob = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    // reader.readAsText(file);
    reader.onload = () => {
      console.log("Image: " , reader.result as string); 
      this.recipeImageBlob = reader.result as string;
      // console.log("Read file as text: ", reader.readAsText(file));
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };

  }

  cancel(){
    this.router.navigate(['/categories', this.categoryId]);
  }

  createRecipe(){
    // console.log("Recipe Name: ", this.recipeForm.value.recipeName);
    // let formData = this.recipeForm.value;

    // formData.recipeImage = this.imageFileName;

    // console.log("Form Data: ", formData);
    
    this.recipeService.createRecipe(this.recipeForm.value.recipeName,this.recipeForm.value.ingredientsInfo, this.recipeForm.value.directions, this.recipeForm.value.recipeImage, this.recipeImageBlob, this.categoryId).subscribe((newRecipe: RecipeDetails) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    })

  }

}
