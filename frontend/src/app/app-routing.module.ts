import { EditCategoryComponent } from './pages/edit-category/edit-category.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { RecipeViewComponent } from './pages/recipe-view/recipe-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'categories', pathMatch: 'full'},
  { path: 'new-category', component: NewCategoryComponent},
  { path: 'edit-category/:categoryId', component: EditCategoryComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
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
