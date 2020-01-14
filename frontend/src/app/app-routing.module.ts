import { HomeComponent } from './pages/home/home.component';
import { EditRecipesComponent } from './pages/edit-recipes/edit-recipes.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { RecipeViewComponent } from './pages/recipe-view/recipe-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full'},
  // { path: '', redirectTo:'categories', pathMatch: 'full'},
  { path: 'new-category', component: NewCategoryComponent},
  { path: 'edit-category/:categoryId', component: EditCategoryComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'home', component: HomeComponent},
  { path: 'new-recipe', component: NewRecipeComponent},
  { path: 'app-recipe-view', component: RecipeViewComponent},
  { path: 'app-recipe-view/:categoryId', component: RecipeViewComponent},
  { path: 'app-recipe-view/:categoryId/new-recipe', component: NewRecipeComponent},
  { path: 'app-recipe-view/categories/:categoryId/edit-recipes/:recipeId', component: EditRecipesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
