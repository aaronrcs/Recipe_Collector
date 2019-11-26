import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeViewComponent } from './pages/recipe-view/recipe-view.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCategoryComponent } from './pages/new-category/new-category.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { WebReqInterceptor } from './web-req-interceptor';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { EditCategoryComponent } from './pages/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeViewComponent,
    NewCategoryComponent,
    NewRecipeComponent,
    LoginPageComponent,
    SignupPageComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
