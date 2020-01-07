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
  //Boolean value for when Categories are empty
  categoriesEmpty = false;

  selectedCategoryId: string;

  recipeImage: string;
  recipeImagePdf: string;

  loggedInInfo: any;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {

      if (params.categoryId) {
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
      // console.log("Categories: ", this.categories);
      
      // If no Categories have been created, disable the 'plus' button
      // For creating a new recipe
      if(this.categories.length === 0){
        this.categoriesEmpty = true;
      }
    })

    // Attaining Login Info
    let getInfo = localStorage.getItem('login-info');
    let parseInfo = JSON.parse(getInfo);
    this.loggedInInfo = parseInfo;
  }

  // Convience function to check if Object is empty
  isEmptyObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  // Using pdfmake
  openRecipeInfoPdf(recipeName: string, recipeImageBlob: string, ingredientInfo: string, directions: string) {

    // this.recipeImagePdf = recipeImageBlob;

    // console.log("Blob: ", recipeImageBlob);


    const docDefinition = {
      info: {
        title: `${recipeName}-recipe`
      },
      content: [
        {
          text: `Recipe for ${recipeName}`,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [
              this.getRecipePhoto(recipeImageBlob)
            ]
          ]
        },
        {
          text: 'Ingredients',
          style: 'header'
        },
        {
          style: 'recipeInfoTables',
          table: {
            widths: [450],
            headerRows: 1,
            body: [
              [ ingredientInfo ] 
            ],
          },
          layout: 'headerLineOnly'
        },
        {
          text: 'Directions',
          style: 'header'
        },

        {
          style: 'recipeInfoTables',
          table: {
            widths: [450],
            headerRows: 1,
            body: [
              [ directions ]
            ],
          },
          layout: 'headerLineOnly'
        },

      ],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        },
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        recipeInfoTables: {
          fontSize: 14,
          bold: true,
          italics: true
        }
      }


    };
    // Open pdf file in another tab
    pdfMake.createPdf(docDefinition).open();

  }

  saveRecipeInfoPdf(recipeName: string, recipeImageBlob: string, ingredientInfo: string, directions: string) {

    const docDefinition = {
      content: [
        {
          text: `${recipeName} Recipe`,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          columns: [
            [
              this.getRecipePhoto(recipeImageBlob)
            ]
          ]
        },
        {
          text: 'Ingredients',
          style: 'header'
        },
        {
          style: 'recipeInfoTables',
          table: {
            widths: [450],
            headerRows: 1,
            body: [
              [ ingredientInfo ] 
            ],
          },
          layout: 'headerLineOnly'
        },
        {
          text: 'Directions',
          style: 'header'
        },

        {
          style: 'recipeInfoTables',
          table: {
            widths: [450],
            headerRows: 1,
            body: [
              [ directions ]
            ],
          },
          layout: 'headerLineOnly'
        },

      ],
      styles: {
        name: {
          fontSize: 16,
          bold: true
        },
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline'
        },
        recipeInfoTables: {
          fontSize: 14,
          bold: true,
          italics: true
        }
      }


    };
    // Save pdf file
    pdfMake.createPdf(docDefinition).download(`${recipeName}-recipe.pdf`);

  }

  // Function for setting Ingredients Info
  getIngredientInfo(ingredientInfo: string) {
    return {
      table: {
        widths: ['*'],
        body: [
          {
            text: ingredientInfo,
            style: 'ingredientsInfo'
          }
        ]
      }
    }

  }

  // Function for setting up image for external PDF file
  getRecipePhoto(imageBlob: string) {

    if (imageBlob) {
      return {
        image: imageBlob,
        width: 300,
        alignment: 'center'
      };
    }
    return null;
  }

  getBase64(file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.recipeImagePdf = reader.result as string;
    };
    reader.readAsDataURL(file);
    reader.onerror = (error) => {
      console.log('Error: ', error);
    };

  }

  // Function to Delete Categories
  onDeleteCategoryClick() {
    this.recipeService.deleteCategory(this.selectedCategoryId).subscribe((res: any) => {
      this.router.navigate(['/categories']);
    })
  }

  // Function to delete Recipes
  onDeleteRecipeClick(recipeId: string) {
    this.recipeService.deleteRecipe(this.selectedCategoryId, recipeId).subscribe((res: any) => {
      this.recipes = this.recipes.filter(val => val._id !== recipeId);
    })
  }

}
