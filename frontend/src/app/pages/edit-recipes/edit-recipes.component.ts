import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RecipeDetails } from './../../models/recipe.models';
import { Ng2ImgMaxService } from 'ng2-img-max';

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
  uploadedImage: File;

  editRecipeForm = new FormGroup({
    recipeName: new FormControl('', Validators.required),
    ingredientsInfo: new FormControl('', Validators.required),
    directions: new FormControl('', Validators.required),
    recipeImage: new FormControl(null),
    recipeImageBlob: new FormControl('')
  });

  //Error File Upload info
  errorFileUpload: string;

  //Booleans for File Uploads
  checkFileType = false;
  checkFileSize = false;
  

  constructor(private ng2ImgMax: Ng2ImgMaxService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, public fb: FormBuilder) { }

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
    let imageLimitSizeServer = 0.050;

    // Name of uploaded file
    this.imageFileName = file.name;

    // File Validation
    if(file.size >= 150000){
      this.checkFileSize = true;
    } else {
      this.checkFileSize = false;
    }
    
    // Using ng2ImgMax to compress uploaded Image files to 50 KB if > 50 KB
    this.ng2ImgMax.compressImage(file, imageLimitSizeServer).subscribe(
      result => {
        let path = this.recipeImagePath.substring(0,29)
        this.checkFileType = false;

        // Converting the uploaded image to a File
        this.uploadedImage = new File([result], result.name, {type: result.type});
        let fullPath = path + this.uploadedImage.name;
        // console.log("Image: ", this.uploadedImage);

        this.editRecipeForm.patchValue({
          recipeImage: fullPath
        });
      },
      error => {
        this.checkFileType = true;
        this.errorFileUpload = error.reason;
        // console.log('😢 Oh no!', error);
      }
    );

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
  // Simple getter function for FormControls
  get f() { 
    return this.editRecipeForm.controls; 
  }

  updateRecipe(){
    let formData = this.editRecipeForm.value;
    
    this.recipeService.updateRecipe(this.categoryId, this.recipeId, formData).subscribe((newRecipe: RecipeDetails) => {
      // this.router.navigate(['../'], { relativeTo: this.route });
      this.router.navigate(['/categories', this.categoryId]);
    })

  }

}
