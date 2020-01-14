import { Categories } from './../../models/categories.models';
import { RecipeService } from 'src/app/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  //Declaring FormGroup
  categoryForm: FormGroup;

  constructor( private recipeService: RecipeService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      categoryName: ['', Validators.required]
    });
  }

  cancel(){
    this.router.navigate(['/app-recipe-view']);
  }
  
  // Simple getter function for FormControls
  get f() { 
    return this.categoryForm.controls; 
  }

  createCategory(categoryName: string){
    return this.recipeService.createCategory(categoryName).subscribe((category: Categories) => {
      // Now we navigate /app-recipe-view/response._id
      this.router.navigate(['/app-recipe-view', category._id]);
    })

  }
}
