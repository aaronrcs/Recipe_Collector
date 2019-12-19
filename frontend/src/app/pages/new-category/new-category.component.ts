import { Categories } from './../../models/categories.models';
import { RecipeService } from 'src/app/recipe.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  constructor( private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  createCategory(categoryName: string){
    return this.recipeService.createCategory(categoryName).subscribe((category: Categories) => {
      // Now we navigate /categories/response._id
      
      this.router.navigate(['/categories', category._id]);
    })

  }
}
