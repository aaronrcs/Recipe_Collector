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

  recipeImage: string;
  recipeImagePdf: string;
  fileString:any= "";

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
  getRecipeInfoPdf(recipeName: string, recipeImage: string){
    // let data = document.getElementById(`${recipeId}`);
    // console.log("Recipe Name: ", recipeName);

    let fileName = recipeImage.substring(29);
    let filePath = recipeImage.substring(0,29);

    // this.testConvert(fileName, filePath).then((result) => {
    //   console.log("Convert: ", result);
    //   this.getBase64(result);
    // })

    
    console.log('File Path: ', filePath);
    console.log('File Name: ', fileName);
    const docDefinition = { 
      content: [
        {
          text: `${recipeName} Recipe Details`,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [
              // this.getProfilePicObject()
            ]
          ]
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

  testConvert(fileName: string, filePath: string){
    return new Promise(resolve => {
      var file = new File([fileName], filePath);
      var reader = new FileReader();
      // Read file content on file loaded event
      reader.onload = function(event) {
        // resolve(event.target.result);
        // console.log("Result: ", event.target.result);
      };

      // this.getBase64(file);
      
      // Convert data to base64 
      reader.readAsDataURL(file);
      
    });
  }

  getProfilePicObject() {

    if (this.recipeImagePdf) {
      return {
        image: this.recipeImagePdf,
        width: 75,
        alignment : 'center'
      };
    }
    return null;
  }

  getBase64(file) {
    console.log("File In Base64: ", file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.recipeImagePdf = reader.result as string;
      console.log("Actual image: ", this.recipeImagePdf);
    };
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };

  }

  onDeleteCategoryClick(){
      this.recipeService.deleteCategory(this.selectedCategoryId).subscribe((res: any) => {
        this.router.navigate(['/categories']);
      })
  }

  onDeleteRecipeClick(recipeId: string){
    this.recipeService.deleteRecipe(this.selectedCategoryId, recipeId).subscribe((res: any) => {
      this.recipes = this.recipes.filter(val => val._id !== recipeId);
    })
  }

}
