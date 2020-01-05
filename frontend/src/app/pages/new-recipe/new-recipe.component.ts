import { RecipeDetails } from './../../models/recipe.models';
import { RecipeService } from 'src/app/recipe.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ng2ImgMaxService } from 'ng2-img-max';

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
  uploadedImage: File;

  //Error File Upload info
  errorFileUpload: string;

  //Booleans for File Uploads
  checkFileType = false;
  checkFileSize = false;

  constructor(private ng2ImgMax: Ng2ImgMaxService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, public fb: FormBuilder) { }

  // recipeForm = new FormGroup({
  //   recipeName: new FormControl(''),
  //   ingredientsInfo: new FormControl(''),
  //   directions: new FormControl(''),
  //   recipeImage: new FormControl(null)
  // });

  recipeForm = this.fb.group({
    recipeName: ['', Validators.required],
    ingredientsInfo: ['', Validators.required],
    directions: ['', Validators.required],
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
    let imageLimitSizeServer = 0.050;

    // File Validation
    if(file.size >= 150000){
      this.checkFileSize = true;
    } else {
      this.checkFileSize = false;
    }
    
    // Using ng2ImgMax to compress uploaded Image files to 50 KB if > 50 KB
    this.ng2ImgMax.compressImage(file, imageLimitSizeServer).subscribe(
      result => {
        this.checkFileType = false;
        // Converting the uploaded image to a File
        this.uploadedImage = new File([result], result.name, {type: result.type});
        // console.log("Image: ", this.uploadedImage);
        this.recipeForm.patchValue({
          recipeImage: this.uploadedImage
        });
      },
      error => {
        this.checkFileType = true;
        this.errorFileUpload = error.reason;
        // console.log('😢 Oh no!', error);
      }
    );
    

    // console.log("File: ", file);
        
    this.imageFileName = file.name;

    this.recipeForm.get('recipeImage').updateValueAndValidity();

    // // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.recipeImageBlob = reader.result as string;
      // console.log("Blob: ", this.recipeImageBlob);
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
  // Simple getter function for FormControls
  get f() { 
    return this.recipeForm.controls; 
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
