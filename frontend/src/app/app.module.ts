import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeViewComponent } from './pages/recipe-view/recipe-view.component';

import { HttpClientModule } from '@angular/common/http';
import { NewCategoryComponent } from './pages/new-category/new-category.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeViewComponent,
    NewCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
