import { RecipeDetails } from './../../models/recipe.models';
import { Categories } from './../../models/categories.models';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss']
})
export class RecipeViewComponent implements OnInit {

  categories: Categories[];
  recipes: RecipeDetails[];
  // Boolean values for expansion panels
  panelOpenStateIngred = false;
  panelOpenStateDirect = false;


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
          // console.log("Recipes: ", this.recipes);
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

  // Convience function to check if Object is empty
  isEmptyObject(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  // Using pdfmake
  getRecipeInfoPdf(recipeName: string){
    // let data = document.getElementById(`${recipeId}`);
    // console.log("Recipe Name: ", recipeName);
    const docDefinition = { 
      content: [
        {
          text: `${recipeName} Recipe Details`,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        }
      ],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        }
      }
    
    
    };
    // Open pdf file in another tab
    pdfMake.createPdf(docDefinition).open();
    
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
