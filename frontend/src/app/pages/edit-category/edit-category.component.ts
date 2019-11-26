import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  constructor( private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  categoryId: string;

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.categoryId = params.categoryId;
    })
  }

  updateCategory(categoryName: string){
    this.recipeService.updateCategory(this.categoryId, categoryName).subscribe(() => {
      this.router.navigate(['/categories', this.categoryId]);
    })
  }

}
