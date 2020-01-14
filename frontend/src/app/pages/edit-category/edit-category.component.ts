import { Categories } from './../../models/categories.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor( private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  categoryId: string;
  singleCategoryInfo: Categories;

  editCategoryForm = new FormGroup({
    categoryName: new FormControl('', Validators.required)
  });


  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.categoryId = params.categoryId;

        this.recipeService.getSingleCategory(this.categoryId).subscribe((singleCategory: Categories) => {
          this.singleCategoryInfo = singleCategory;
          console.log("Single Category: ", this.singleCategoryInfo);
  
          // Using 'setValue' to set the value of each input with the specified information
          // This will will help when using wants edit/update a Category name
          this.editCategoryForm.setValue({
            categoryName: this.singleCategoryInfo.categoryName
          });
  
        })
    })
  }

  cancel(){
    this.router.navigate(['/app-recipe-view', this.categoryId]);
  }

  // Simple getter function for FormControls
  get f() { 
    return this.editCategoryForm.controls; 
  }

  updateCategory(){
    let formData = this.editCategoryForm.value;

    this.recipeService.updateCategory(this.categoryId, formData).subscribe(() => {
      this.router.navigate(['/app-recipe-view', this.categoryId]);
    })
  }

}
