import { RecipeDetails } from './../../models/recipe.models';
import { Categories } from './../../models/categories.models';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {

  categories: Categories[];
  recipes: RecipeDetails[];

  selectedCategoryId: string;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {

      if(params.categoryId){
        this.selectedCategoryId = params.categoryId;
        /**
       * Passing the active Params (categoryId) to getRecipes
       * to obtain all recipes for a certain Category
       */
        this.recipeService.getRecipes(params.categoryId).subscribe((recipes: RecipeDetails[]) => {
          this.recipes = recipes;
          console.log("Recipes: ", this.recipes);
        })
      } else {
        this.recipes = undefined;
      }
      
    })

    // Subscribing to Observeable to get an array of all existing Categories
    this.recipeService.getCategory().subscribe((categories: Categories[]) => {
      this.categories = categories;
    })
  }

  isEmptyObject(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  convertToPdf(recipeId: string){
    // console.log("Selected: ", recipeId);
    let data = document.getElementById(`${recipeId}`);
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      let imgWidth = 108;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('recipe3.pdf'); // Generated PDF
    });

  }

  onDeleteCategoryClick(){
      this.recipeService.deleteCategory(this.selectedCategoryId).subscribe((res: any) => {
        console.log("Category Deleted: ", res);
        this.router.navigate(['/categories']);
      })
  }

  onDeleteRecipeClick(recipeId: string){
    this.recipeService.deleteRecipe(this.selectedCategoryId, recipeId).subscribe((res: any) => {
      this.recipes = this.recipes.filter(val => val._id !== recipeId);
      console.log("Recipe Deleted: ", res);
      // this.router.navigate(['/categories']);
    })
  }

}
