import { RecipeService } from 'src/app/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
  }

  createCategory(categoryName: string){
    return this.recipeService.createCategory(categoryName).subscribe((response: any) => {
      console.log("Response: ", response);
      // Now we navigate /categories/response._id
    })

  }
}
