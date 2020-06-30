import { AlertifyService } from './alertify.service';
import { WebRequestService } from './web-request.service';
import { RecipeService } from 'src/app/recipe.service';
import { AuthService } from './auth.service';

import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

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
import { EditRecipesComponent } from './pages/edit-recipes/edit-recipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeViewComponent,
    NewCategoryComponent,
    NewRecipeComponent,
    LoginPageComponent,
    SignupPageComponent,
    EditCategoryComponent,
    EditRecipesComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    Ng2ImgMaxModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AuthService,
    RecipeService,
    WebRequestService,
    AlertifyService,
    {
      provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
