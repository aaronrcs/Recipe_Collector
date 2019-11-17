import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { RecipeViewComponent } from './pages/recipe-view/recipe-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'categories', pathMatch: 'full'},
  { path: 'new-category', component: NewCategoryComponent},
  { path: 'new-recipe', component: NewRecipeComponent},
  { path: 'categories', component: RecipeViewComponent},
  { path: 'categories/:categoryId', component: RecipeViewComponent},
  { path: 'categories/:categoryId/new-recipe', component: NewRecipeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
