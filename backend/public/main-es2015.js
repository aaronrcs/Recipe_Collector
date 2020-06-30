(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<!-- <div *ngIf=\"signedUpMessage\" class=\"notification signup-box\">\n    <button class=\"delete\" (click)=\"closeNotification()\"></button>\n    Successfully Signed Up!\n</div> -->\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-category/edit-category.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-category/edit-category.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"edit-category-content\">\n    <div class=\"modal-box\">\n        <h1 class=\"title\">\n            Edit Category\n        </h1>\n        <form [formGroup]=\"editCategoryForm\" (ngSubmit)=\"updateCategory()\">\n            <input formControlName=\"categoryName\" class=\"input has-background-light is-medium\" type=\"text\"\n                placeholder=\"Enter Category name\">\n            <div *ngIf=\"f.categoryName.errors\" class=\"error-message\">\n                <div *ngIf=\"f.categoryName.errors.required\">Category name is required.</div>\n            </div>\n            <br><br>\n            <div class=\"buttons is-right\">\n                <button class=\"button is-medium\" (click)=\"cancel()\">Cancel</button>\n                <button class=\"button is-primary has-text-white is-medium\"\n                    [disabled]=\"editCategoryForm.invalid\">Save</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-recipes/edit-recipes.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-recipes/edit-recipes.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"new-recipe-content\">\n    <div class=\"modal-box-edit-recipe\">\n        <h1 class=\"title\">\n            Edit your Recipe!\n        </h1>\n        <form [formGroup]=\"editRecipeForm\" (ngSubmit)=\"updateRecipe()\">\n            <input formControlName=\"recipeName\" class=\"input has-background-light is-medium\" type=\"text\"\n                placeholder=\"Edit Recipe Name (If necessary)\">\n            <!-- Error checking Recipe Name -->\n            <div *ngIf=\"f.recipeName.errors\" class=\"error-message\">\n                <div *ngIf=\"f.recipeName.errors.required\">Recipe Name is required.</div>\n            </div>\n            <textarea formControlName=\"ingredientsInfo\" class=\"textarea has-background-light\"\n                placeholder=\"Edit Ingredient Details (If necessary)\"></textarea>\n            <!-- Error checking Ingredients Information -->\n            <div *ngIf=\"f.ingredientsInfo.errors\" class=\"error-message\">\n                <div *ngIf=\"f.ingredientsInfo.errors.required\">Ingredient details is required.</div>\n            </div>\n            <textarea formControlName=\"directions\" class=\"textarea has-background-light\"\n                placeholder=\"Edit Directions (If necessary)\"></textarea>\n            <!-- Error checking Directions Information -->\n            <div *ngIf=\"f.directions.errors\" class=\"error-message\">\n                <div *ngIf=\"f.directions.errors.required\">Directions is required.</div>\n            </div>\n            <!-- Showing Current Image -->\n            <div *ngIf=\"recipeImageBlob\">\n                <img class=\"editImage\" [src]=\"recipeImageBlob\">\n            </div>\n            <!-- Container for Image Upload -->\n            <div class=\"file has-name is-fullwidth\">\n                <label class=\"file-label\">\n                    <input class=\"file-input\" type=\"file\" (change)=\"fileChanged($event)\" value=\"test\">\n                    <span class=\"file-cta\">\n                        <span class=\"file-icon\">\n                            <i class=\"fas fa-upload\"></i>\n                        </span>\n                        <span class=\"file-label\">\n                            Choose a file…\n                        </span>\n                    </span>\n                    <span class=\"file-name\" *ngIf=\"imageFileName\">\n                        {{imageFileName}}\n                    </span>\n                    <span class=\"file-name\" *ngIf=\"notEmptyFile\">\n                        Update Image (Optional)\n                    </span>\n                </label>\n            </div>\n            <!-- Error checking File Upload -->\n            <div *ngIf=\"checkFileType\" class=\"error-message\">\n                <div>{{errorFileUpload}}</div>\n            </div>\n            <div *ngIf=\"checkFileSize\" class=\"error-message\">\n                <div>Must not exceed more than 150 KB in file size.</div>\n            </div>\n\n            <br><br>\n            <div class=\"buttons is-right\">\n                <button class=\"button is-medium\" (click)=\"cancel()\">Cancel</button>\n                <button type=\"submit\" class=\"button is-primary has-text-white is-medium\"\n                    [ngClass]=\"{'newRecipeImageDisabled': checkFileType || checkFileSize}\">Save Changes</button>\n            </div>\n        </form>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-page-content\">\n    <div class=\"home-info-container\">\n        <h1>Welcome to Recipe Collector!</h1>\n        <img class=\"logo\" src=\"../../../assets/rc_logo.png\">\n        <h2>Create, Share and collect your favorite Recipes!</h2>\n    </div>\n    \n    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-page-content\">\n    <div class=\"login-box\">\n\n        <h1 class=\"title\">Login</h1>\n\n        <div *ngIf=\"errorMessage\">\n          <br>\n          <h1 class=\"error-message\">*{{errorMessage}}</h1>\n        </div>\n\n        <form [formGroup]=\"loginForm\">\n          <div class=\"field\">\n            <p class=\"control has-icons-left has-icons-right\">\n              <input formControlName=\"email\" #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\" [ngClass]=\"{'is-invalid':submitted && f.email.errors}\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-envelope\"></i>\n              </span>\n            </p>\n            <!-- Showing Email Errors to User -->\n            <div *ngIf=\"f.email.errors\" class=\"error-message\">\n              <div *ngIf=\"submitted && f.email.errors.required\">Email is required.</div>\n              <div *ngIf=\"f.email.errors.email\">Email must be a valid email address.</div>\n            </div>\n\n          </div>\n          <div class=\"field\">\n            <p class=\"control has-icons-left\">\n              <input formControlName=\"password\" #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\" [ngClass]=\"{'is-invalid':submitted && f.password.errors}\">\n              <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-lock\"></i>\n              </span>\n            </p>\n            <!-- Showing password Errors to User -->\n            <div *ngIf=\"f.password.errors\" class=\"error-message\">\n              <div *ngIf=\"submitted && f.password.errors.required\">Password is required.</div>\n            </div>\n          </div>\n          <div class=\"field\" style=\"display: flex; justify-content: flex-end;\">\n            <p class=\"control\">\n              <button class=\"button is-success has-text-white\" (click)=\"onLoginClicked(emailInput.value, pwInput.value)\" [disabled]=\"loginForm.invalid\">\n                Login\n              </button>\n            </p>\n          </div>\n\n        </form>\n\n          <!-- <br>\n          <p>\n            Don't have an account?\n            <a routerLink=\"/signup\" style=\"color: orange;\"> Sign up</a>\n            now!\n          </p> -->\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <ul *ngIf=\"loggedInInfo\" class=\"menu\">\n        <img class=\"main-logo\" src=\"../../../assets/rc_logo.png\">\n        <li class=\"logo\">\n            <a routerLink='/home'>Recipe Collector</a>\n        </li>\n        <li class=\"item email\" [ngClass]=\"{'active': isToggled}\">\n            <span style=\"color: #fbac59; padding: 10px;\">Welcome,</span>\n            <span style=\"color: white\">{{loggedInInfo.body.email}}</span>\n        </li>\n\n        <button class=\"item button\" [ngClass]=\"{'active': isToggled}\" (click)=\"logout()\">\n            <a>Logout</a>\n        </button>\n        <button class=\"item button\" [ngClass]=\"{'active': isToggled}\" (click)=\"viewRecipes()\">\n            <a>View Recipes</a>\n        </button>\n        <!-- <hr> -->\n\n        <!-- 3 Bar icon (For Mobile Devices) -->\n        <li class=\"toggle\" (click)=\"toggleMenuItem()\">\n            <span class=\"bars\"></span>\n        </li>\n\n    </ul>\n    <ul *ngIf=\"!loggedInInfo\" class=\"menu\">\n        <img class=\"main-logo\" src=\"../../../assets/rc_logo.png\">\n        <li class=\"logo\">\n            <a routerLink='/home'>Recipe Collector</a>\n        </li>\n        \n        <button class=\"item button\" [ngClass]=\"{'active': isToggled}\" (click)=\"login()\">\n            <a>Log In</a>\n        </button>\n        <button class=\"item button secondary\" [ngClass]=\"{'active': isToggled}\" (click)=\"signUp()\">\n            <a>Sign Up</a>\n        </button>\n\n        <!-- 3 Bar icon (For Mobile Devices) -->\n        <li class=\"toggle\" (click)=\"toggleMenuItem()\">\n            <span class=\"bars\"></span>\n        </li>\n    </ul>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-category/new-category.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-category/new-category.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"new-category-content\">\n    <div class=\"modal-box\">\n        <h1 class=\"title\">\n            Create a new Category\n        </h1>\n        <form [formGroup]=\"categoryForm\">\n            <input formControlName=\"categoryName\" #categoryTitleInput class=\"input has-background-light is-medium\" type=\"text\"\n                placeholder=\"Enter category name...\">\n            <!-- Showing Email Errors to User -->\n            <div *ngIf=\"f.categoryName.errors\" class=\"error-message\">\n                <div *ngIf=\"f.categoryName.errors.required\">Category name is required.</div>\n            </div>\n            <br><br>\n            <div class=\"buttons is-right\">\n                <button class=\"button is-medium\" (click)=\"cancel()\">Cancel</button>\n                <button class=\"button is-primary has-text-white is-medium\"\n                    (click)=\"createCategory(categoryTitleInput.value)\" [disabled]=\"categoryForm.invalid\">Create</button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-recipe/new-recipe.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-recipe/new-recipe.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"new-recipe-content\">\n  <div class=\"modal-box-new-recipe\">\n    <h1 class=\"title\">\n      Create a new Recipe\n    </h1>\n    <form [formGroup]=\"recipeForm\" (ngSubmit)=\"createRecipe()\">\n      <input formControlName=\"recipeName\" class=\"input has-background-light is-medium\" type=\"text\"\n        placeholder=\"Enter a Recipe Name\">\n      <!-- Error checking Recipe Name -->\n      <div *ngIf=\"f.recipeName.errors\" class=\"error-message\">\n        <div *ngIf=\"f.recipeName.errors.required\">Recipe name is required.</div>\n      </div>\n      <textarea formControlName=\"ingredientsInfo\" class=\"textarea has-background-light\"\n        placeholder=\"Enter Ingredient Details\"></textarea>\n      <!-- Error checking Ingredients Information -->\n      <div *ngIf=\"f.ingredientsInfo.errors\" class=\"error-message\">\n        <div *ngIf=\"f.ingredientsInfo.errors.required\">Ingredients information is required.</div>\n      </div>\n      <textarea formControlName=\"directions\" class=\"textarea has-background-light\"\n        placeholder=\"Enter Directions\"></textarea>\n      <!-- Error checking Directions -->\n      <div *ngIf=\"f.directions.errors\" class=\"error-message\">\n        <div *ngIf=\"f.directions.errors.required\">Directions is required.</div>\n      </div>\n      <!-- Showing Current Image -->\n      <div *ngIf=\"recipeImageBlob\">\n        <img class=\"newImage\" [src]=\"recipeImageBlob\">\n      </div>\n      <!-- Container for Image Upload -->\n      <div class=\"file has-name is-fullwidth\">\n        <label class=\"file-label\">\n          <input class=\"file-input\" type=\"file\" (change)=\"fileChanged($event)\" value=\"test\">\n          <span class=\"file-cta\">\n            <span class=\"file-icon\">\n              <i class=\"fas fa-upload\"></i>\n            </span>\n            <span class=\"file-label\">\n              Choose a file…\n            </span>\n          </span>\n          <span class=\"file-name\" *ngIf=\"imageFileName\">\n            {{imageFileName}}\n          </span>\n          <span class=\"file-name\" *ngIf=\"notEmptyFile\">\n            Recipe Image (Optional)\n          </span>\n        </label>\n      </div>\n      <!-- Error checking File Upload -->\n      <div *ngIf=\"checkFileType\" class=\"error-message\">\n        <div>{{errorFileUpload}}</div>\n      </div>\n      <div *ngIf=\"checkFileSize\" class=\"error-message\">\n        <div>Must not exceed more than 150 KB in file size.</div>\n      </div>\n\n      <!-- <input type=\"file\" (change)=\"fileChanged($event)\" aria-describedby=\"fileHelpId\"> -->\n      <!-- <img *ngIf=\"recipeImage\" [src]=\"recipeImage\"> -->\n\n      <br><br>\n      <div class=\"buttons is-right\">\n        <button class=\"button is-medium\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"submit\" class=\"button is-primary has-text-white is-medium\"\n          [disabled]=\"recipeForm.invalid\" [ngClass]=\"{'newRecipeImageDisabled': checkFileType || checkFileSize}\">Create</button>\n      </div>\n    </form>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe-view/recipe-view.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe-view/recipe-view.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"recipe-view-content\">\n    <div class=\"recipe-manager-container\">\n\n        <!-- Sidebar Container -->\n        <div class=\"sidebar\">\n            <div class=\"sidebar-header-container\">\n                <h1 id=\"title-category\" class=\"title\">\n                    Categories\n                </h1>\n                <div class=\"dropdown is-hoverable is-right\">\n                    <div class=\"dropdown-trigger\">\n                        <button class=\"button\" aria-haspopup=\"true\" aria-controls=\"dropdown-menu4\">\n                            <span class=\"icon is-small\">\n                                <i class=\"fas fa-cog\" aria-hidden=\"true\"></i>\n                            </span>\n                        </button>\n                    </div>\n                    <div class=\"dropdown-menu\" id=\"dropdown-menu4\" role=\"menu\">\n                        <div class=\"dropdown-content\">\n                            <a [routerLink]=\"['/edit-category', selectedCategoryId]\" class=\"dropdown-item\">\n                                Edit\n                            </a>\n                            <a (click)=\"onDeleteCategoryClick(selectedCategoryId)\" class=\"dropdown-item has-text-danger\">\n                                Delete\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"category-container\">\n                <div class=\"category-menu\">\n                    <!-- [routerLink]=\"['/categories', item._id]\" -->\n                    <a class=\"category-menu-item\" *ngFor=\"let item of categories\"\n                         [routerLink]=\"['/app-recipe-view', item._id]\" routerLinkActive=\"is-active\">\n                        <p>{{item.categoryName}}</p>\n                    </a>\n                </div>\n            </div>\n            <div class=\"category-button-container\">\n                <button id=\"add-category\" routerLink=\"/new-category\" alt=\"New Category\">\n                    + New Category\n                </button>\n            </div>\n        </div>\n\n        <!-- Recipe List Container -->\n        <div class=\"main-recipe-container\">\n            <div class=\"main-recipe-header\">\n                <h1 class=\"title\">\n                    Recipe Lists\n                </h1>\n                <div class=\"recipe-button-container\">\n                    <img id=\"add-recipe\" routerLink=\"./new-recipe\" src=\"../../../assets/plus_sign.png\" alt=\"New Recipe\"\n                        [ngClass]=\"{'newRecipeDisabled': categoriesEmpty}\">\n                </div>\n            </div>\n            <hr style=\"background-color: white; margin: 0; width: 100%;\">\n            <div class=\"recipe-list-container\" *ngIf=\"recipes\">\n                <!-- Current Recipes -->\n                <div *ngFor=\"let recipe of recipes\">\n                    <div class=\"recipe-container\">\n                        <div class=\"recipe-header\" id=\"{{recipe._id}}\">\n                            <p style=\"font-size: 20px;\"> <b>{{recipe.recipeName}}</b></p>\n\n                            <!-- If User Did not Upload a Recipe Image -->\n                            <span class=\"recipeImage\" *ngIf=\"!recipe.recipeImageBlob\">\n                                <p> <i>No Image was uploaded</i> </p>\n                            </span>\n                            <!-- Recipe Image -->\n                            <span class=\"recipeImage\" *ngIf=\"recipe.recipeImageBlob\">\n                                <img [src]=\"recipe.recipeImageBlob\">\n                            </span>\n                            <!-- Edit and Delete Buttons -->\n                            <button class=\"button\"\n                                [routerLink]=\"['/app-recipe-view/categories', selectedCategoryId, 'edit-recipes', recipe._id]\">\n                                <div class=\"icon\">\n                                    <i class=\"fas fa-edit\"></i>\n                                </div>\n                            </button>\n                            <button class=\"button is-danger\" (click)=\"onDeleteRecipeClick(recipe._id)\"\n                                style=\"margin-left: 10px\">\n                                <div class=\"icon\">\n                                    <i class=\"fas fa-trash\"></i>\n                                </div>\n                            </button>\n                        </div>\n                        <!-- CRUD Buttons -->\n                        <div class=\"recipe-buttons\">\n                            <!-- Button to Convert Recipe Data to PDF file -->\n                            <button class=\"button is-primary\"\n                                (click)=\"openRecipeInfoPdf(recipe.recipeName, recipe.recipeImageBlob, recipe.ingredientsInfo, recipe.directions)\"\n                                style=\"margin-left: 10px\">\n                                Open to PDF\n                            </button>\n                            <button class=\"button is-info\"\n                                (click)=\"saveRecipeInfoPdf(recipe.recipeName, recipe.recipeImageBlob, recipe.ingredientsInfo, recipe.directions)\"\n                                style=\"margin-left: 10px\">\n                                Save to PDF\n                            </button>\n\n                        </div>\n                    </div>\n                    <!-- Expansion Panel -->\n                    <mat-accordion>\n                        <!-- Expansion Panel For Ingredients -->\n                        <mat-expansion-panel (opened)=\"panelOpenStateIngred = true\"\n                            (closed)=\"panelOpenStateIngred = false\" class=\"expansion-panel\">\n                            <!-- Headers -->\n                            <mat-expansion-panel-header class=\"expansion-headers\">\n                                <mat-panel-title>\n                                    Ingredients:\n                                </mat-panel-title>\n                                <mat-panel-description>\n                                    ( {{panelOpenStateIngred ? 'Hide' : 'View'}} ingredients )\n                                </mat-panel-description>\n                            </mat-expansion-panel-header>\n                            <!-- HIdden Items -->\n                            <mat-panel-description id=\"{{recipe._id}}\">\n                                <b>{{recipe.ingredientsInfo}}</b>\n                            </mat-panel-description>\n                        </mat-expansion-panel>\n                        <!-- Expansion Panel For Directions -->\n                        <mat-expansion-panel (opened)=\"panelOpenStateDirect = true\"\n                            (closed)=\"panelOpenStateDirect = false\" class=\"expansion-panel\">\n                            <mat-expansion-panel-header class=\"expansion-headers\">\n                                <mat-panel-title>\n                                    Directions:\n                                </mat-panel-title>\n                                <mat-panel-description>\n                                    ( {{panelOpenStateDirect ? 'Hide' : 'View'}} directions )\n                                </mat-panel-description>\n                            </mat-expansion-panel-header>\n                            <!-- Hidden Items -->\n                            <mat-panel-description id=\"{{recipe._id}}\">\n                                <b>{{recipe.directions}}</b>\n                            </mat-panel-description>\n                        </mat-expansion-panel>\n                    </mat-accordion>\n                </div>\n\n                <!-- If no recipes have been created for a selected Category, this text will appear -->\n                <div *ngIf=\"recipes.length === 0\">\n                    <h1 class=\"empty-recipe-list\">\n                        There are no recipes created for this category.\n                        Click the\n                        <span><img id=\"add-recipe-info\" src=\"../../../assets/plus_sign.png\" alt=\"New Recipe\"></span>\n                        above\n                        to create a new recipe!\n                    </h1>\n                </div>\n\n            </div>\n\n            <!-- When Categories are empty, this text will appear-->\n            <div *ngIf=\"isEmptyObject(categories)\">\n                <h1 class=\"is-category-empty\">\n                    Create a new Category by clicking on the 'New Category' button.\n                    Then, select a Category in the sidebar to view Recipes.\n                </h1>\n            </div>\n\n            <!-- If Categories are created but not selected upon logging in -->\n            <div *ngIf=\"!isEmptyObject(categories) && !recipes\">\n                <h1 class=\"is-category-empty\">\n                    Welcome back! <b style=\"color: #f1b850;\">{{loggedInInfo.body.email}}</b>\n                    <br>\n                    Click on a Category to view your recipes!\n                </h1>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"signup-page-content\">\n    <div class=\"signup-box\">\n        <h1 class=\"title\">Sign Up</h1>\n        <div class=\"signup-info\">\n          <ul style=\"list-style-type:disc;\">\n              <b>Passwords</b> must contain the following criteria:\n              <br><br>\n            <li>At least 1 lowercase alphabetical character.</li>\n            <li>Contain at least 1 lowercase alphabetical character.</li>\n            <li>Contain at least 1 uppercase alphabetical character.</li>\n            <li>Contain at least 1 numeric character.</li>\n            <li>Contain at least one special character.(e.g !,@,$,%,^&)</li>\n            <li> Password <b>length</b> must at least 8 characters long.</li>\n          </ul>\n        </div>\n        <div *ngIf=\"errorMessage && !duplicateUser\">\n          <br>\n          <!-- <div *ngFor=\"let error of errorMessage\">\n            <h1 class=\"error-message\">{{error.message}}</h1>\n          </div> -->\n          <h1 class=\"error-message\">*{{errorMessage}}</h1>\n        </div>\n  \n        <hr>\n        <form [formGroup]=\"signUpForm\">\n\n            <div class=\"field\">\n                <p class=\"control has-icons-left has-icons-right\">\n                  <input formControlName=\"email\" #emailInput class=\"input has-background-light\" type=\"email\" placeholder=\"Email\" [ngClass]=\"{'is-invalid':submitted && f.email.errors}\">\n                  <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-envelope\"></i>\n                  </span>\n                </p>\n                <div *ngIf=\"f.email.errors\" class=\"error-message\">\n                    <div *ngIf=\"submitted && f.email.errors.required\">Email is required.</div>\n                    <div *ngIf=\"f.email.errors.email\">Email must be a valid email address.</div>\n                </div>\n                <div *ngIf=\"duplicateUser\">\n                  <h1 class=\"error-message\">{{duplicateUser}}</h1>\n                </div>\n                \n              </div>\n              <div class=\"field\">\n                <p class=\"control has-icons-left\">\n                  <input formControlName=\"password\" #pwInput class=\"input has-background-light\" type=\"password\" placeholder=\"Password\" [ngClass]=\"{'is-invalid':submitted && f.password.errors}\">\n                  <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-lock\"></i>\n                  </span>\n                </p>\n\n                <div *ngIf=\"f.password.errors\" class=\"error-message\">\n                    <div *ngIf=\"submitted && f.password.errors.required\">Password is required.</div>\n                    <div *ngIf=\"f.password.errors.pattern\">Password must meet the above requirements.</div>\n                </div>\n                \n              </div>\n              <div class=\"field\" style=\"display: flex; justify-content: flex-end;\">\n                <p class=\"control\">\n                  <button class=\"button is-success has-text-white\" (click)=\"onSignupClicked(emailInput.value, pwInput.value)\" [disabled]=\"signUpForm.invalid\">\n                    Sign up\n                  </button>\n                </p>\n              </div>\n        </form>\n          <!-- <br>\n          <p>\n            Already got an account?\n            <a routerLink=\"/login\" style=\"color: orange;\"> Login</a>\n            now!\n          </p> -->\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/alertify.service.ts":
/*!*************************************!*\
  !*** ./src/app/alertify.service.ts ***!
  \*************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");
/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_2__);



let AlertifyService = class AlertifyService {
    constructor() { }
    confirm(message, okCallBack) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["confirm"](message, (e) => {
            if (e) {
                okCallBack();
            }
        });
    }
    success(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["success"](message);
    }
    error(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["error"](message);
    }
    warning(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["warning"](message);
    }
    message(message) {
        alertifyjs__WEBPACK_IMPORTED_MODULE_2__["message"](message);
    }
};
AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertifyService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_edit_recipes_edit_recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/edit-recipes/edit-recipes.component */ "./src/app/pages/edit-recipes/edit-recipes.component.ts");
/* harmony import */ var _pages_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/edit-category/edit-category.component */ "./src/app/pages/edit-category/edit-category.component.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/new-recipe/new-recipe.component */ "./src/app/pages/new-recipe/new-recipe.component.ts");
/* harmony import */ var _pages_new_category_new_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/new-category/new-category.component */ "./src/app/pages/new-category/new-category.component.ts");
/* harmony import */ var _pages_recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/recipe-view/recipe-view.component */ "./src/app/pages/recipe-view/recipe-view.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");











const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: '', redirectTo:'categories', pathMatch: 'full'},
    { path: 'new-category', component: _pages_new_category_new_category_component__WEBPACK_IMPORTED_MODULE_7__["NewCategoryComponent"] },
    { path: 'edit-category/:categoryId', component: _pages_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["EditCategoryComponent"] },
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
    { path: 'signup', component: _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_4__["SignupPageComponent"] },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'new-recipe', component: _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_6__["NewRecipeComponent"] },
    { path: 'app-recipe-view', component: _pages_recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_8__["RecipeViewComponent"] },
    { path: 'app-recipe-view/:categoryId', component: _pages_recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_8__["RecipeViewComponent"] },
    { path: 'app-recipe-view/:categoryId/new-recipe', component: _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_6__["NewRecipeComponent"] },
    { path: 'app-recipe-view/categories/:categoryId/edit-recipes/:recipeId', component: _pages_edit_recipes_edit_recipes_component__WEBPACK_IMPORTED_MODULE_2__["EditRecipesComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup-box {\n  background-color: #76e8de;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbnJvbWVyby9EZXNrdG9wL0FuZ3VsYXJfUHJvamVjdHMvUmVjaXBlX0NvbGxlY3Rvci9mcm9udGVuZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwLWJveHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZlOGRlO1xuICAgIHdpZHRoOiAxMDB2dztcbn0iLCIuc2lnbnVwLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NmU4ZGU7XG4gIHdpZHRoOiAxMDB2dztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'R.C';
    }
    ngOnInit() {
        // this.authService.getSignUpStatus().subscribe(res =>
        //   this.signedUpMessage = res
        // );
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alertify.service */ "./src/app/alertify.service.ts");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");
/* harmony import */ var src_app_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/recipe-view/recipe-view.component */ "./src/app/pages/recipe-view/recipe-view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_new_category_new_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/new-category/new-category.component */ "./src/app/pages/new-category/new-category.component.ts");
/* harmony import */ var _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/new-recipe/new-recipe.component */ "./src/app/pages/new-recipe/new-recipe.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _web_req_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web-req-interceptor */ "./src/app/web-req-interceptor.ts");
/* harmony import */ var _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/signup-page/signup-page.component */ "./src/app/pages/signup-page/signup-page.component.ts");
/* harmony import */ var _pages_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/edit-category/edit-category.component */ "./src/app/pages/edit-category/edit-category.component.ts");
/* harmony import */ var _pages_edit_recipes_edit_recipes_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/edit-recipes/edit-recipes.component */ "./src/app/pages/edit-recipes/edit-recipes.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/navbar/navbar.component */ "./src/app/pages/navbar/navbar.component.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");

























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _pages_recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_10__["RecipeViewComponent"],
            _pages_new_category_new_category_component__WEBPACK_IMPORTED_MODULE_12__["NewCategoryComponent"],
            _pages_new_recipe_new_recipe_component__WEBPACK_IMPORTED_MODULE_13__["NewRecipeComponent"],
            _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_14__["LoginPageComponent"],
            _pages_signup_page_signup_page_component__WEBPACK_IMPORTED_MODULE_16__["SignupPageComponent"],
            _pages_edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_17__["EditCategoryComponent"],
            _pages_edit_recipes_edit_recipes_component__WEBPACK_IMPORTED_MODULE_18__["EditRecipesComponent"],
            _pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            ng2_img_max__WEBPACK_IMPORTED_MODULE_22__["Ng2ImgMaxModule"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
        providers: [
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"],
            _web_request_service__WEBPACK_IMPORTED_MODULE_2__["WebRequestService"],
            _alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _web_req_interceptor__WEBPACK_IMPORTED_MODULE_15__["WebReqInterceptor"], multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alertify.service */ "./src/app/alertify.service.ts");








let AuthService = class AuthService {
    constructor(webService, router, http, alertify) {
        this.webService = webService;
        this.router = router;
        this.http = http;
        this.alertify = alertify;
        // Using BehaviorSubject to check SignUp status
        this.signUpSubject = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.subjectLogin = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('');
    }
    sendSignUpStatus(status) {
        this.signUpSubject.next(status);
    }
    getSignUpStatus() {
        return this.signUpSubject.asObservable();
    }
    // BehaviorSubject for Login Info
    sendLoginInfo(info) {
        localStorage.setItem('login-info', JSON.stringify(info));
        this.subjectLogin.next({ response: info });
    }
    getLoginInfo() {
        return this.subjectLogin.asObservable();
    }
    login(email, password) {
        return this.webService.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // Auth tokens will be in header of this response
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            this.alertify.success(`Hi there, ${res.body.email}`);
            // console.log('Response: ', res);
            this.sendLoginInfo(res);
        }));
    }
    signup(email, password) {
        return this.webService.signup(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            // Auth tokens will be in header of this response
            this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
            // Change sign up status to 'True'
            // this.sendSignUpStatus(res.ok);
            this.alertify.success('You signed up Successfully!');
            // console.log('Response: ', res);
            // Catch error
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
                this.alertify.error(err);
                return err;
            });
        }));
    }
    getAccessToken() {
        return localStorage.getItem('x-access-token');
    }
    getRefreshToken() {
        return localStorage.getItem('x-refresh-token');
    }
    getUserId() {
        return localStorage.getItem('user-id');
    }
    setAccessToken(accessToken) {
        localStorage.setItem('x-access-token', accessToken);
    }
    logout() {
        this.removeSession();
        // This will fire when we get 401 unauthorized error
        this.router.navigate(['/login']);
    }
    setSession(userId, accessToken, refreshToken) {
        localStorage.setItem('user-id', userId);
        localStorage.setItem('x-access-token', accessToken);
        localStorage.setItem('x-refresh-token', refreshToken);
    }
    removeSession() {
        localStorage.removeItem('login-info');
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
    }
    getNewAccessToken() {
        // For Local Use
        // return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
        //   headers: {
        //     'x-refresh-token': this.getRefreshToken(),
        //     _id: this.getUserId()
        //   },
        //   observe: 'response'
        // }).pipe(
        //   tap((res: HttpResponse<any>) => {
        //     this.setAccessToken(res.headers.get('x-access-token'));
        //   })
        // );
        // For Production Use
        return this.http.get(`users/me/access-token`, {
            headers: {
                'x-refresh-token': this.getRefreshToken(),
                _id: this.getUserId()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
            this.setAccessToken(res.headers.get('x-access-token'));
        }));
    }
};
AuthService.ctorParameters = () => [
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _alertify_service__WEBPACK_IMPORTED_MODULE_7__["AlertifyService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/pages/edit-category/edit-category.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/edit-category/edit-category.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/edit-category/edit-category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-category/edit-category.component.ts ***!
  \****************************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let EditCategoryComponent = class EditCategoryComponent {
    constructor(route, recipeService, router) {
        this.route = route;
        this.recipeService = recipeService;
        this.router = router;
        this.editCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            categoryName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.categoryId = params.categoryId;
            this.recipeService.getSingleCategory(this.categoryId).subscribe((singleCategory) => {
                this.singleCategoryInfo = singleCategory;
                console.log('Single Category: ', this.singleCategoryInfo);
                // Using 'setValue' to set the value of each input with the specified information
                // This will will help when using wants edit/update a Category name
                this.editCategoryForm.setValue({
                    categoryName: this.singleCategoryInfo.categoryName
                });
            });
        });
    }
    cancel() {
        this.router.navigate(['/app-recipe-view', this.categoryId]);
    }
    // Simple getter function for FormControls
    get f() {
        return this.editCategoryForm.controls;
    }
    updateCategory() {
        const formData = this.editCategoryForm.value;
        this.recipeService.updateCategory(this.categoryId, formData).subscribe(() => {
            this.router.navigate(['/app-recipe-view', this.categoryId]);
        });
    }
};
EditCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-category/edit-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-category.component.scss */ "./src/app/pages/edit-category/edit-category.component.scss")).default]
    })
], EditCategoryComponent);



/***/ }),

/***/ "./src/app/pages/edit-recipes/edit-recipes.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/edit-recipes/edit-recipes.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  margin-bottom: 10px;\n}\n\ntextarea {\n  margin-bottom: 10px;\n}\n\n.modal-box-edit-recipe {\n  width: 100%;\n  height: 21%;\n  max-width: 29em;\n  min-height: 36em;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n  overflow-y: auto;\n}\n\n.editImage {\n  width: 30%;\n}\n\n.hidden {\n  display: none;\n}\n\n.newRecipeImageDisabled {\n  color: currentColor;\n  cursor: not-allowed;\n  opacity: 0.5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbnJvbWVyby9EZXNrdG9wL0FuZ3VsYXJfUHJvamVjdHMvUmVjaXBlX0NvbGxlY3Rvci9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2VkaXQtcmVjaXBlcy9lZGl0LXJlY2lwZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQtcmVjaXBlcy9lZGl0LXJlY2lwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC1yZWNpcGVzL2VkaXQtcmVjaXBlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0e1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG50ZXh0YXJlYXtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1vZGFsLWJveC1lZGl0LXJlY2lwZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIxJTtcbiAgICBtYXgtd2lkdGg6IDI5ZW07XG4gICAgbWluLWhlaWdodDogMzZlbTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmVkaXRJbWFnZXtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8vIERpc2FibGVkIGlmIGVycm9yIGZvciBJbWFnZSB1cGxvYWRcbi5uZXdSZWNpcGVJbWFnZURpc2FibGVke1xuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsImlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxudGV4dGFyZWEge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubW9kYWwtYm94LWVkaXQtcmVjaXBlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjElO1xuICBtYXgtd2lkdGg6IDI5ZW07XG4gIG1pbi1oZWlnaHQ6IDM2ZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5lZGl0SW1hZ2Uge1xuICB3aWR0aDogMzAlO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5ld1JlY2lwZUltYWdlRGlzYWJsZWQge1xuICBjb2xvcjogY3VycmVudENvbG9yO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBvcGFjaXR5OiAwLjU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/edit-recipes/edit-recipes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/edit-recipes/edit-recipes.component.ts ***!
  \**************************************************************/
/*! exports provided: EditRecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRecipesComponent", function() { return EditRecipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");






let EditRecipesComponent = class EditRecipesComponent {
    constructor(ng2ImgMax, recipeService, route, router, fb) {
        this.ng2ImgMax = ng2ImgMax;
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.notEmptyFile = true;
        this.editRecipeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            recipeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ingredientsInfo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            directions: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            recipeImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            recipeImageBlob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
        // Booleans for File Uploads
        this.checkFileType = false;
        this.checkFileSize = false;
    }
    // editRecipeForm = this.fb.group({
    //   recipeName: [''],
    //   ingredientsInfo: [''],
    //   directions: [''],
    //   recipeImage: [null],
    //   recipeImageBlob: [null]
    // });
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.categoryId = params.categoryId;
            this.recipeId = params.recipeId;
            this.recipeService.getSingleRecipe(this.categoryId, this.recipeId).subscribe((singleRecipe) => {
                this.singleRecipeInfo = singleRecipe;
                this.recipeImageBlob = this.singleRecipeInfo.recipeImageBlob;
                this.recipeImagePath = this.singleRecipeInfo.recipeImage;
                // Using 'setValue' to set the value of each input with the specified information
                // This will will help when using wants edit/update any recipes they created
                this.editRecipeForm.setValue({
                    recipeName: this.singleRecipeInfo.recipeName,
                    ingredientsInfo: this.singleRecipeInfo.ingredientsInfo,
                    directions: this.singleRecipeInfo.directions,
                    recipeImage: this.singleRecipeInfo.recipeImage,
                    recipeImageBlob: this.recipeImageBlob
                });
            });
        });
    }
    fileChanged(e) {
        this.notEmptyFile = false;
        const file = e.target.files[0];
        const imageLimitSizeServer = 0.050;
        // Name of uploaded file
        this.imageFileName = file.name;
        // File Validation
        if (file.size >= 150000) {
            this.checkFileSize = true;
        }
        else {
            this.checkFileSize = false;
        }
        // Using ng2ImgMax to compress uploaded Image files to 50 KB if > 50 KB
        this.ng2ImgMax.compressImage(file, imageLimitSizeServer).subscribe(result => {
            const path = this.recipeImagePath.substring(0, 29);
            this.checkFileType = false;
            // Converting the uploaded image to a File
            this.uploadedImage = new File([result], result.name, { type: result.type });
            const fullPath = path + this.uploadedImage.name;
            // console.log("Image: ", this.uploadedImage);
            this.editRecipeForm.patchValue({
                recipeImage: fullPath
            });
        }, error => {
            this.checkFileType = true;
            this.errorFileUpload = error.reason;
            // console.log('😢 Oh no!', error);
        });
        // // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.recipeImageBlob = reader.result;
            // Getting newly created Blob of updated image
            this.editRecipeForm.get('recipeImageBlob').setValue(this.recipeImageBlob);
            this.editRecipeForm.get('recipeImageBlob').updateValueAndValidity();
        };
        reader.readAsDataURL(file);
    }
    cancel() {
        this.router.navigate(['/app-recipe-view', this.categoryId]);
    }
    // Simple getter function for FormControls
    get f() {
        return this.editRecipeForm.controls;
    }
    updateRecipe() {
        const formData = this.editRecipeForm.value;
        this.recipeService.updateRecipe(this.categoryId, this.recipeId, formData).subscribe((newRecipe) => {
            // this.router.navigate(['../'], { relativeTo: this.route });
            this.router.navigate(['/app-recipe-view', this.categoryId]);
        });
    }
};
EditRecipesComponent.ctorParameters = () => [
    { type: ng2_img_max__WEBPACK_IMPORTED_MODULE_5__["Ng2ImgMaxService"] },
    { type: src_app_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
EditRecipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-recipes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-recipes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-recipes/edit-recipes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-recipes.component.scss */ "./src/app/pages/edit-recipes/edit-recipes.component.scss")).default]
    })
], EditRecipesComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  color: black;\n  font-size: 26px;\n  font-family: sans-serif;\n  padding-bottom: 30px;\n}\n\nh2 {\n  color: #000000;\n  font-size: 4vw;\n}\n\n.logo {\n  width: 23%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbnJvbWVyby9EZXNrdG9wL0FuZ3VsYXJfUHJvamVjdHMvUmVjaXBlX0NvbGxlY3Rvci9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksVUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cbmgye1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xufVxuLmxvZ297XG4gICAgd2lkdGg6IDIzJTtcbn0iLCJoMSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbmgyIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogNHZ3O1xufVxuXG4ubG9nbyB7XG4gIHdpZHRoOiAyMyU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-box {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  width: 350px;\n  max-width: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbnJvbWVyby9EZXNrdG9wL0FuZ3VsYXJfUHJvamVjdHMvUmVjaXBlX0NvbGxlY3Rvci9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1ib3h7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1heC13aWR0aDogMzUwcHg7XG59IiwiLmxvZ2luLWJveCB7XG4gIHBhZGRpbmc6IDM1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../alertify.service */ "./src/app/alertify.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let LoginPageComponent = class LoginPageComponent {
    constructor(authService, router, formBuilder, alertify) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertify = alertify;
        // Helpful variables for error handling
        this.emailPasswordErrorMessage = 'The username or password you specified are invalid. Please try again.';
        // Boolean to check when the form was submitted
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
                ]]
        });
    }
    // Simple getter function for FormControls
    get f() {
        return this.loginForm.controls;
    }
    onLoginClicked(email, password) {
        this.submitted = true;
        this.authService.login(email, password).subscribe((res) => {
            if (res.status === 200) {
                // Thus user has logged in!
                this.router.navigate(['/app-recipe-view']);
            }
        }, (err) => {
            // If error upon logging in
            this.errorMessage = this.emailPasswordErrorMessage;
            // console.log('Login Error: ', err);
            this.alertify.error('Error logging in, Please try again!');
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Basic styling */\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-family: sans-serif;\n}\nnav {\n  background: #222 !important;\n  padding: 5px 20px;\n}\nul {\n  list-style-type: none;\n}\na {\n  color: white;\n  text-decoration: none;\n}\nhr {\n  border-left: 6px solid green;\n  height: 500px;\n}\na:hover {\n  text-decoration: underline;\n}\n.logo a:hover {\n  text-decoration: none;\n}\n.main-logo {\n  width: 18%;\n}\n.email {\n  display: block;\n}\n.menu li {\n  font-size: 16px;\n  padding: 15px 5px;\n  white-space: nowrap;\n}\n.logo a,\n.toggle a {\n  font-size: 20px;\n}\n.button {\n  background-color: #222222;\n  border-color: #222222;\n  background: transparent;\n}\n.button.secondary {\n  border-bottom: 1px #444 solid !important;\n}\n/* Mobile menu */\n.menu {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.toggle {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n.item.button {\n  -webkit-box-ordinal-group: 3;\n          order: 2;\n}\n.item {\n  width: 100%;\n  text-align: center;\n  -webkit-box-ordinal-group: 4;\n          order: 3;\n  display: none;\n}\n.item.active {\n  display: block;\n}\n/* Navbar Toggle */\n.toggle {\n  cursor: pointer;\n}\n.bars {\n  background: #999 !important;\n  display: inline-block;\n  height: 2px;\n  position: relative;\n  -webkit-transition: background 0.2s ease-out;\n  transition: background 0.2s ease-out;\n  width: 18px;\n}\n.bars:before,\n.bars:after {\n  background: #999 !important;\n  content: \"\";\n  display: block;\n  height: 100%;\n  position: absolute;\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n  width: 100%;\n}\n.bars:before {\n  top: 5px;\n}\n.bars:after {\n  top: -5px;\n}\n/* Tablet menu */\n@media all and (min-width: 468px) {\n  .menu {\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n\n  .logo {\n    -webkit-box-flex: 1;\n            flex: 1;\n  }\n\n  .main-logo {\n    width: 15%;\n  }\n\n  .item.button {\n    width: auto;\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n    display: block;\n  }\n\n  .toggle {\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n\n  .button.secondary {\n    border: 0;\n  }\n\n  .button a {\n    padding: 7.5px 15px;\n    border: 1px #006d6d solid !important;\n  }\n\n  .button.secondary a {\n    background: transparent;\n  }\n\n  .button a:hover {\n    text-decoration: none;\n    -webkit-transition: all 0.25s;\n    transition: all 0.25s;\n  }\n\n  .button:not(.secondary) a:hover {\n    background: #006d6d !important;\n    border-color: #005959 !important;\n  }\n\n  .button.secondary a:hover {\n    color: #ddd;\n  }\n}\n/* Desktop menu */\n@media all and (min-width: 768px) {\n  .item {\n    display: block;\n    width: auto;\n  }\n\n  .toggle {\n    display: none;\n  }\n\n  .logo {\n    -webkit-box-ordinal-group: 1;\n            order: 0;\n  }\n\n  .main-logo {\n    width: 10%;\n  }\n\n  .item {\n    -webkit-box-ordinal-group: 2;\n            order: 1;\n  }\n\n  .button {\n    -webkit-box-ordinal-group: 3;\n            order: 2;\n  }\n\n  .menu li {\n    padding: 15px 10px;\n  }\n\n  .menu li.button {\n    padding-right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbnJvbWVyby9EZXNrdG9wL0FuZ3VsYXJfUHJvamVjdHMvUmVjaXBlX0NvbGxlY3Rvci9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQUE7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNDSjtBRENFO0VBQ0UsdUJBQUE7QUNFSjtBREFFO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQ0dKO0FEREU7RUFDRSxxQkFBQTtBQ0lKO0FERkU7RUFDRSxZQUFBO0VBQ0EscUJBQUE7QUNLSjtBREhFO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0FDTUo7QURKRTtFQUNFLDBCQUFBO0FDT0o7QURMRTtFQUNFLHFCQUFBO0FDUUo7QURORTtFQUNFLFVBQUE7QUNTSjtBRFBFO0VBQ0UsY0FBQTtBQ1VKO0FEUkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1dKO0FEVEU7O0VBRUUsZUFBQTtBQ1lKO0FEVkU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNhSjtBRFhFO0VBQ0Usd0NBQUE7QUNjSjtBRFhFLGdCQUFBO0FBQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNjSjtBRFpFO0VBQ0UsNEJBQUE7VUFBQSxRQUFBO0FDZUo7QURiRTtFQUNFLDRCQUFBO1VBQUEsUUFBQTtBQ2dCSjtBRGRFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7VUFBQSxRQUFBO0VBQ0EsYUFBQTtBQ2lCSjtBRGZFO0VBQ0UsY0FBQTtBQ2tCSjtBRGZFLGtCQUFBO0FBQ0E7RUFDRSxlQUFBO0FDa0JKO0FEaEJFO0VBQ0UsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQUEsb0NBQUE7RUFDQSxXQUFBO0FDbUJKO0FEakJFOztFQUVFLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUFBLDZCQUFBO0VBQ0EsV0FBQTtBQ29CSjtBRGxCRTtFQUNFLFFBQUE7QUNxQko7QURuQkU7RUFDRSxTQUFBO0FDc0JKO0FEbkJFLGdCQUFBO0FBQ0E7RUFDRTtJQUNJLHdCQUFBO1lBQUEsdUJBQUE7RUNzQk47O0VEbkJFO0lBQ0ksbUJBQUE7WUFBQSxPQUFBO0VDc0JOOztFRG5CRTtJQUNFLFVBQUE7RUNzQko7O0VEbkJFO0lBQ0ksV0FBQTtJQUNBLDRCQUFBO1lBQUEsUUFBQTtJQUNBLGNBQUE7RUNzQk47O0VEcEJFO0lBQ0ksNEJBQUE7WUFBQSxRQUFBO0VDdUJOOztFRHJCRTtJQUNJLFNBQUE7RUN3Qk47O0VEdEJFO0lBQ0ksbUJBQUE7SUFFQSxvQ0FBQTtFQ3dCTjs7RURyQkU7SUFDSSx1QkFBQTtFQ3dCTjs7RUR0QkU7SUFDSSxxQkFBQTtJQUNBLDZCQUFBO0lBQUEscUJBQUE7RUN5Qk47O0VEdkJFO0lBQ0ksOEJBQUE7SUFDQSxnQ0FBQTtFQzBCTjs7RUR4QkU7SUFDSSxXQUFBO0VDMkJOO0FBQ0Y7QUR4QkUsaUJBQUE7QUFDQTtFQUNFO0lBQ0ksY0FBQTtJQUNBLFdBQUE7RUMwQk47O0VEeEJFO0lBQ0ksYUFBQTtFQzJCTjs7RUR6QkU7SUFDSSw0QkFBQTtZQUFBLFFBQUE7RUM0Qk47O0VEMUJFO0lBQ0UsVUFBQTtFQzZCSjs7RUQzQkU7SUFDSSw0QkFBQTtZQUFBLFFBQUE7RUM4Qk47O0VENUJFO0lBQ0ksNEJBQUE7WUFBQSxRQUFBO0VDK0JOOztFRDdCRTtJQUNJLGtCQUFBO0VDZ0NOOztFRDlCRTtJQUNJLGdCQUFBO0VDaUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQmFzaWMgc3R5bGluZyAqL1xuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxuICBuYXYge1xuICAgIGJhY2tncm91bmQ6ICMyMjIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgfVxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG4gIGEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgaHJ7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gIC5sb2dvIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICAubWFpbi1sb2dve1xuICAgIHdpZHRoOiAxOCU7XG4gIH1cbiAgLmVtYWlse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5tZW51IGxpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICAubG9nbyBhLFxuICAudG9nZ2xlIGEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAuYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIC5idXR0b24uc2Vjb25kYXJ5IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggIzQ0NCBzb2xpZCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAvKiBNb2JpbGUgbWVudSAqL1xuICAubWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLnRvZ2dsZSB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbiAgLml0ZW0uYnV0dG9uIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuICAuaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9yZGVyOiAzO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLml0ZW0uYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLyogTmF2YmFyIFRvZ2dsZSAqL1xuICAudG9nZ2xlIHtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuICAuYmFycyB7XG4gICAgYmFja2dyb3VuZDogIzk5OSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1vdXQ7XG4gICAgd2lkdGg6IDE4cHg7XG4gIH1cbiAgLmJhcnM6YmVmb3JlLFxuICAuYmFyczphZnRlciB7XG4gICAgYmFja2dyb3VuZDogIzk5OSAhaW1wb3J0YW50O1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYmFyczpiZWZvcmUge1xuICAgIHRvcDogNXB4O1xuICB9XG4gIC5iYXJzOmFmdGVyIHtcbiAgICB0b3A6IC01cHg7XG4gIH1cbiAgXG4gIC8qIFRhYmxldCBtZW51ICovXG4gIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ2OHB4KSB7XG4gICAgLm1lbnUge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIFxuICAgIC5sb2dvIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAubWFpbi1sb2dve1xuICAgICAgd2lkdGg6IDE1JTtcbiAgICB9XG4gIFxuICAgIC5pdGVtLmJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC50b2dnbGUge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG4gICAgLmJ1dHRvbi5zZWNvbmRhcnkge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIC5idXR0b24gYSB7XG4gICAgICAgIHBhZGRpbmc6IDcuNXB4IDE1cHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHRlYWwgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggIzAwNmQ2ZCBzb2xpZCAhaW1wb3J0YW50O1xuICAgICAgICAvLyBib3JkZXItcmFkaXVzOjUwZW07XG4gICAgfVxuICAgIC5idXR0b24uc2Vjb25kYXJ5IGEge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCA7ICAgIFxuICAgIH1cbiAgICAuYnV0dG9uIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246YWxsIC4yNXM7XG4gICAgfVxuICAgIC5idXR0b246bm90KC5zZWNvbmRhcnkpIGE6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA2ZDZkICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwNTk1OSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnV0dG9uLnNlY29uZGFyeSBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICNkZGQ7XG4gICAgfSBcbiAgfVxuICBcbiAgLyogRGVza3RvcCBtZW51ICovXG4gIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIC50b2dnbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICAgIG9yZGVyOiAwO1xuICAgIH1cbiAgICAubWFpbi1sb2dve1xuICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gICAgLml0ZW0ge1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cbiAgICAubWVudSBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICB9XG4gICAgLm1lbnUgbGkuYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gIH0iLCIvKiBCYXNpYyBzdHlsaW5nICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbm5hdiB7XG4gIGJhY2tncm91bmQ6ICMyMjIgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5hIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmhyIHtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubG9nbyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWFpbi1sb2dvIHtcbiAgd2lkdGg6IDE4JTtcbn1cblxuLmVtYWlsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tZW51IGxpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxvZ28gYSxcbi50b2dnbGUgYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIGJvcmRlci1jb2xvcjogIzIyMjIyMjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5idXR0b24uc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4ICM0NDQgc29saWQgIWltcG9ydGFudDtcbn1cblxuLyogTW9iaWxlIG1lbnUgKi9cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2dnbGUge1xuICBvcmRlcjogMTtcbn1cblxuLml0ZW0uYnV0dG9uIHtcbiAgb3JkZXI6IDI7XG59XG5cbi5pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3JkZXI6IDM7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pdGVtLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBOYXZiYXIgVG9nZ2xlICovXG4udG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmFycyB7XG4gIGJhY2tncm91bmQ6ICM5OTkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4uYmFyczpiZWZvcmUsXG4uYmFyczphZnRlciB7XG4gIGJhY2tncm91bmQ6ICM5OTkgIWltcG9ydGFudDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYXJzOmJlZm9yZSB7XG4gIHRvcDogNXB4O1xufVxuXG4uYmFyczphZnRlciB7XG4gIHRvcDogLTVweDtcbn1cblxuLyogVGFibGV0IG1lbnUgKi9cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDQ2OHB4KSB7XG4gIC5tZW51IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5sb2dvIHtcbiAgICBmbGV4OiAxO1xuICB9XG5cbiAgLm1haW4tbG9nbyB7XG4gICAgd2lkdGg6IDE1JTtcbiAgfVxuXG4gIC5pdGVtLmJ1dHRvbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgb3JkZXI6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAudG9nZ2xlIHtcbiAgICBvcmRlcjogMjtcbiAgfVxuXG4gIC5idXR0b24uc2Vjb25kYXJ5IHtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICAuYnV0dG9uIGEge1xuICAgIHBhZGRpbmc6IDcuNXB4IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggIzAwNmQ2ZCBzb2xpZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJ1dHRvbi5zZWNvbmRhcnkgYSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAuYnV0dG9uIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XG4gIH1cblxuICAuYnV0dG9uOm5vdCguc2Vjb25kYXJ5KSBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA2ZDZkICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA1OTU5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYnV0dG9uLnNlY29uZGFyeSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2RkZDtcbiAgfVxufVxuLyogRGVza3RvcCBtZW51ICovXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAudG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIG9yZGVyOiAwO1xuICB9XG5cbiAgLm1haW4tbG9nbyB7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxuXG4gIC5pdGVtIHtcbiAgICBvcmRlcjogMTtcbiAgfVxuXG4gIC5idXR0b24ge1xuICAgIG9yZGVyOiAyO1xuICB9XG5cbiAgLm1lbnUgbGkge1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgfVxuXG4gIC5tZW51IGxpLmJ1dHRvbiB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/navbar/navbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavbarComponent = class NavbarComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isToggled = false;
    }
    ngOnInit() {
        this.authService.getLoginInfo().subscribe(res => {
            const getInfo = localStorage.getItem('login-info');
            const parseInfo = JSON.parse(getInfo);
            this.loggedInInfo = parseInfo;
        });
    }
    signUp() {
        this.isToggled = !this.isToggled;
        this.router.navigate(['/signup']);
    }
    login() {
        this.isToggled = !this.isToggled;
        this.router.navigate(['/login']);
    }
    viewRecipes() {
        this.isToggled = !this.isToggled;
        this.router.navigate(['/app-recipe-view']);
    }
    logout() {
        this.isToggled = !this.isToggled;
        localStorage.removeItem('login-info');
        localStorage.removeItem('user-id');
        localStorage.removeItem('x-access-token');
        localStorage.removeItem('x-refresh-token');
        // Value now becomes 'null'
        this.loggedInInfo = localStorage.getItem('login-info');
        this.router.navigate(['/login']);
    }
    toggleMenuItem() {
        this.isToggled = !this.isToggled;
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/pages/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/pages/new-category/new-category.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/new-category/new-category.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1jYXRlZ29yeS9uZXctY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/new-category/new-category.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-category/new-category.component.ts ***!
  \**************************************************************/
/*! exports provided: NewCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategoryComponent", function() { return NewCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let NewCategoryComponent = class NewCategoryComponent {
    constructor(recipeService, router, formBuilder) {
        this.recipeService = recipeService;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.categoryForm = this.formBuilder.group({
            categoryName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    cancel() {
        this.router.navigate(['/app-recipe-view']);
    }
    // Simple getter function for FormControls
    get f() {
        return this.categoryForm.controls;
    }
    createCategory(categoryName) {
        return this.recipeService.createCategory(categoryName)
            .subscribe((category) => {
            // Now we navigate /app-recipe-view/response._id
            this.router.navigate(['/app-recipe-view', category._id]);
        });
    }
};
NewCategoryComponent.ctorParameters = () => [
    { type: src_app_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
NewCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-new-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-category/new-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-category.component.scss */ "./src/app/pages/new-category/new-category.component.scss")).default]
    })
], NewCategoryComponent);



/***/ }),

/***/ "./src/app/pages/new-recipe/new-recipe.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/new-recipe/new-recipe.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  margin-bottom: 10px;\n}\n\ntextarea {\n  margin-bottom: 10px;\n}\n\n.modal-box-new-recipe {\n  /* min-height: 400px; */\n  width: 100%;\n  height: 21%;\n  max-width: 29em;\n  min-height: 36em;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n  overflow-y: auto;\n}\n\n.newImage {\n  width: 30%;\n}\n\n.newRecipeImageDisabled {\n  color: currentColor;\n  cursor: not-allowed;\n  opacity: 0.5;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbnJvbWVyby9EZXNrdG9wL0FuZ3VsYXJfUHJvamVjdHMvUmVjaXBlX0NvbGxlY3Rvci9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL25ldy1yZWNpcGUvbmV3LXJlY2lwZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbmV3LXJlY2lwZS9uZXctcmVjaXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtBQ0lKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbmV3LXJlY2lwZS9uZXctcmVjaXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXR7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbnRleHRhcmVhe1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubW9kYWwtYm94LW5ldy1yZWNpcGV7XG4gICAgLyogbWluLWhlaWdodDogNDAwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMSU7XG4gICAgbWF4LXdpZHRoOiAyOWVtO1xuICAgIG1pbi1oZWlnaHQ6IDM2ZW07XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5uZXdJbWFnZXtcbiAgICB3aWR0aDogMzAlO1xufVxuXG4vLyBEaXNhYmxlZCBpZiBlcnJvciBmb3IgSW1hZ2UgdXBsb2FkXG4ubmV3UmVjaXBlSW1hZ2VEaXNhYmxlZHtcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iLCJpbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vZGFsLWJveC1uZXctcmVjaXBlIHtcbiAgLyogbWluLWhlaWdodDogNDAwcHg7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxJTtcbiAgbWF4LXdpZHRoOiAyOWVtO1xuICBtaW4taGVpZ2h0OiAzNmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAzNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ubmV3SW1hZ2Uge1xuICB3aWR0aDogMzAlO1xufVxuXG4ubmV3UmVjaXBlSW1hZ2VEaXNhYmxlZCB7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/new-recipe/new-recipe.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/new-recipe/new-recipe.component.ts ***!
  \**********************************************************/
/*! exports provided: NewRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewRecipeComponent", function() { return NewRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_recipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");






let NewRecipeComponent = class NewRecipeComponent {
    constructor(ng2ImgMax, recipeService, route, router, fb) {
        this.ng2ImgMax = ng2ImgMax;
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.notEmptyFile = true;
        // Booleans for File Uploads
        this.checkFileType = false;
        this.checkFileSize = false;
        // recipeForm = new FormGroup({
        //   recipeName: new FormControl(''),
        //   ingredientsInfo: new FormControl(''),
        //   directions: new FormControl(''),
        //   recipeImage: new FormControl(null)
        // });
        this.recipeForm = this.fb.group({
            recipeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ingredientsInfo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            directions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            recipeImage: [null]
        });
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.categoryId = params.categoryId;
        });
    }
    fileChanged(e) {
        this.notEmptyFile = false;
        const file = e.target.files[0];
        const imageLimitSizeServer = 0.050;
        // File Validation
        if (file.size >= 150000) {
            this.checkFileSize = true;
        }
        else {
            this.checkFileSize = false;
        }
        // Using ng2ImgMax to compress uploaded Image files to 50 KB if > 50 KB
        this.ng2ImgMax.compressImage(file, imageLimitSizeServer).subscribe(result => {
            this.checkFileType = false;
            // Converting the uploaded image to a File
            this.uploadedImage = new File([result], result.name, { type: result.type });
            // console.log("Image: ", this.uploadedImage);
            this.recipeForm.patchValue({
                recipeImage: this.uploadedImage
            });
        }, error => {
            this.checkFileType = true;
            this.errorFileUpload = error.reason;
            // console.log('😢 Oh no!', error);
        });
        this.imageFileName = file.name;
        this.recipeForm.get('recipeImage').updateValueAndValidity();
        // // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.recipeImageBlob = reader.result;
            // console.log("Blob: ", this.recipeImageBlob);
        };
        reader.readAsDataURL(file);
    }
    getBase64(file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        // reader.readAsText(file);
        reader.onload = () => {
            console.log('Image: ', reader.result);
            this.recipeImageBlob = reader.result;
            // console.log("Read file as text: ", reader.readAsText(file));
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }
    cancel() {
        this.router.navigate(['/app-recipe-view', this.categoryId]);
    }
    // Simple getter function for FormControls
    get f() {
        return this.recipeForm.controls;
    }
    createRecipe() {
        this.recipeService.createRecipe(this.recipeForm.value.recipeName, this.recipeForm.value.ingredientsInfo, this.recipeForm.value.directions, this.recipeForm.value.recipeImage, this.recipeImageBlob, this.categoryId)
            .subscribe(() => {
            this.router.navigate(['../'], { relativeTo: this.route });
        });
    }
};
NewRecipeComponent.ctorParameters = () => [
    { type: ng2_img_max__WEBPACK_IMPORTED_MODULE_5__["Ng2ImgMaxService"] },
    { type: src_app_recipe_service__WEBPACK_IMPORTED_MODULE_1__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
NewRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-new-recipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-recipe/new-recipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-recipe.component.scss */ "./src/app/pages/new-recipe/new-recipe.component.scss")).default]
    })
], NewRecipeComponent);



/***/ }),

/***/ "./src/app/pages/recipe-view/recipe-view.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/recipe-view/recipe-view.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700|Nunito:400,700\");\nhtml {\n  background: #daad5b !important;\n}\nhtml, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.error-message {\n  color: red;\n}\n.is-invalid {\n  border: 2px solid red;\n}\n.modal-box {\n  min-height: 318px;\n  width: 100%;\n  height: 21%;\n  max-width: 580px;\n  background: white;\n  border-radius: 5px;\n  padding: 35px;\n}\n.title {\n  font-family: \"Lato\";\n  font-size: 20px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #dca238 !important;\n}\n.home-page-content {\n  padding-top: 8%;\n}\n.home-info-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.signup-page-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  width: 100%;\n  padding-top: 6%;\n}\n.login-page-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  width: 100%;\n  padding-top: 8%;\n}\n.new-category-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: 100%;\n  padding-top: 14%;\n}\n.edit-category-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: 100%;\n  padding-top: 14%;\n}\n.new-recipe-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  width: 100%;\n  height: 100%;\n  padding-top: 10%;\n}\n.recipe-view-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-content: center;\n  width: 100%;\n  padding-top: 3%;\n}\n/* Media Queries: */\n@media all and (max-width: 468px) {\n  .signup-box {\n    width: 23em;\n  }\n}\n.recipe-manager-container {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 100vh;\n  max-width: 1000px;\n  max-height: 600px;\n}\n.sidebar {\n  width: 250px;\n  background: white;\n  padding: 42px;\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.sidebar-header-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 12em;\n}\n.category-container {\n  overflow-y: auto;\n  height: 80%;\n}\n.category-menu {\n  margin-top: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.category-menu .category-menu-item {\n  padding: 10px 15px;\n  width: 100%;\n  color: #5f5f5f;\n  margin-bottom: 5px;\n}\n.category-menu .category-menu-item:hover {\n  background: #f8f8f8;\n}\n.category-menu .category-menu-item.is-active {\n  background-color: #d4cfcf;\n  color: #1b1d1d;\n}\n.main-recipe-container {\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  padding: 42px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  background-color: #525151;\n}\n.main-recipe-header {\n  margin-bottom: 20px;\n  display: -webkit-box;\n  display: flex;\n}\n.recipe-list-container {\n  position: relative;\n  height: 65vh;\n  overflow-y: auto;\n}\n.recipe-container {\n  background-color: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  margin-top: 10px;\n  cursor: pointer;\n  -webkit-transition: box-shadow 0.2s ease, -webkit-transform ease 0.2s;\n  transition: box-shadow 0.2s ease, -webkit-transform ease 0.2s;\n  transition: box-shadow 0.2s ease, transform ease 0.2s;\n  transition: box-shadow 0.2s ease, transform ease 0.2s, -webkit-transform ease 0.2s;\n}\n.recipe-container:hover {\n  box-shadow: 0 0 0 5px #eee;\n}\n.recipe-container .recipe-header {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px;\n}\n.recipe-container .recipe-buttons {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-direction: row-reverse;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#add-recipe {\n  position: absolute;\n  right: 16%;\n  top: 5%;\n  width: 6%;\n  background: #e8bf72;\n  border-radius: 50%;\n}\n#add-recipe-info {\n  width: 8%;\n  height: auto;\n  background: #e8bf72;\n  border-radius: 50%;\n}\n.category-button-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n#add-category {\n  width: 90%;\n  font-size: 17px;\n  background: #e8bf72;\n  padding: 8px;\n}\n.newRecipeDisabled {\n  color: currentColor;\n  cursor: not-allowed;\n  opacity: 0.5;\n  text-decoration: none;\n}\n.empty-recipe-list {\n  font-size: 20px;\n  color: #fffdfd;\n  width: 84%;\n  position: absolute;\n  top: 10%;\n}\n.is-category-empty {\n  font-size: 20px;\n  color: #fffdfd;\n  width: 84%;\n  position: absolute;\n  top: 47%;\n}\n.expansion-panel {\n  background-color: gainsboro;\n}\n.expansion-headers {\n  background-color: #e2dcdc;\n  margin-bottom: 8px;\n}\n.expansion-headers:active {\n  background-color: #e2dcdc;\n}\n.recipeImage {\n  width: 33%;\n  height: 50%;\n  padding: 8px;\n}\n.recipeImage > img {\n  max-width: 80%;\n  max-height: 50%;\n}\n/* Media Queries: */\n/* Desktop menu */\n@media (max-width: 700px) {\n  .sidebar {\n    width: 100vw;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: baseline;\n            align-items: baseline;\n    position: relative;\n  }\n\n  .sidebar-header-container {\n    width: 84vw;\n  }\n\n  .category-container {\n    overflow-y: auto;\n    height: 20vh;\n    width: 84vw;\n  }\n\n  .category-menu {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-flow: wrap;\n    width: 89vw;\n  }\n  .category-menu .category-menu-item {\n    width: 26vw;\n  }\n\n  #add-category {\n    font-size: 17px;\n    width: 50%;\n  }\n\n  .recipe-manager-container {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n  .recipeImage {\n    width: 40vw;\n  }\n\n  #add-recipe {\n    position: absolute;\n    top: 7%;\n    right: 9%;\n    width: 7vw;\n    height: auto;\n  }\n\n  #add-recipe-info {\n    width: 7vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbnJvbWVyby9EZXNrdG9wL0FuZ3VsYXJfUHJvamVjdHMvUmVjaXBlX0NvbGxlY3Rvci9mcm9udGVuZC9zcmMvbWFpbi1zdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVjaXBlLXZpZXcvcmVjaXBlLXZpZXcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWFyb25yb21lcm8vRGVza3RvcC9Bbmd1bGFyX1Byb2plY3RzL1JlY2lwZV9Db2xsZWN0b3IvZnJvbnRlbmQvc3JjL2FwcC9wYWdlcy9yZWNpcGUtdmlldy9yZWNpcGUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHUSxrRkFBQTtBQXNCUjtFQUVJLDhCQUFBO0FDeEJKO0FEMkJBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFBVyxpREFBQTtBQ3ZCZjtBRDRCQTtFQUNJLFVBQUE7QUN6Qko7QUQyQkE7RUFDSSxxQkFBQTtBQ3hCSjtBRDJCQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDeEJKO0FEMkJBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDeEJKO0FEMkJBO0VBQ0ksZUFBQTtBQ3hCSjtBRDJCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDeEJKO0FEMkJBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUN4Qko7QUQyQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3hCSjtBRDJCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN4Qko7QUQyQkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDeEJKO0FEMkJBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3hCSjtBRDJCQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFFQSxlQUFBO0FDekJKO0FENEJBLG1CQUFBO0FBQ0E7RUFDSTtJQUNJLFdBQUE7RUN6Qk47QUFDRjtBQ3RHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRHdHSjtBQ3BHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FEdUdKO0FDcEdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0FEdUdKO0FDbkdBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FEc0dKO0FDcEdBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUR1R0o7QUNyR0k7RUFHSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURxR1I7QUNuR1E7RUFDSSxtQkZ0Q0o7QUMySVI7QUNsR1E7RUFDSSx5QkFBQTtFQUNBLGNGNUNKO0FDZ0pSO0FDNUZBO0VBQ0ksa0JBQUE7RUFFQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FEOEZKO0FDMUZBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUQ2Rko7QUNuRkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRHNGSjtBQ25GQTtFQUVJLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLHFFQUFBO0VBQUEsNkRBQUE7RUFBQSxxREFBQTtFQUFBLGtGQUFBO0FEb0ZKO0FDN0VJO0VBQ0UsMEJBQUE7QUQrRU47QUN2RUk7RUFDSSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUR5RVI7QUN0RUk7RUFJSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDhCQUFBO1VBQUEsMkJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRHFFUjtBQy9EQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRGtFSjtBQ2hFQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRG1FSjtBQ2pFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FEb0VKO0FDbEVBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURxRUo7QUNqRUE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FEb0VKO0FDaEVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FEbUVKO0FDaEVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FEbUVKO0FDL0RBO0VBQ0ksMkJBQUE7QURrRUo7QUMvREE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FEa0VKO0FDaEVJO0VBQ0kseUJBQUE7QURrRVI7QUM3REE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURnRUo7QUM5REE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBRGlFSjtBQzdEQSxtQkFBQTtBQXVEQyxpQkFBQTtBQUNBO0VBRUc7SUFDSSxZQUFBO0lBQ0EsNEJBQUE7SUFBQSw2QkFBQTtZQUFBLHNCQUFBO0lBQ0Esd0JBQUE7WUFBQSx1QkFBQTtJQUNBLDJCQUFBO1lBQUEscUJBQUE7SUFDQSxrQkFBQTtFRFNOOztFQ1BFO0lBQ0ksV0FBQTtFRFVOOztFQ1BFO0lBQ0ksZ0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFRFVOOztFQ1BFO0lBQ0ksOEJBQUE7SUFBQSw2QkFBQTtZQUFBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RURVTjtFQ1JNO0lBR0ksV0FBQTtFRFFWOztFQ0hFO0lBQ0ksZUFBQTtJQUNBLFVBQUE7RURNTjs7RUNIRTtJQUNJLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFRE1OOztFQ0hFO0lBQ0ksV0FBQTtFRE1OOztFQ0hFO0lBQ0ksa0JBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0VETU47O0VDSEU7SUFDSSxVQUFBO0VETU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2lwZS12aWV3L3JlY2lwZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR2xvYmFsIFN0eWxlc1xuLy8gQWxzbyBmb3IgY2hhbmdpbmcgdmFyaWFibGUgdmFsdWVzXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwfE51bml0bzo0MDAsNzAwJyk7XG5cbiR0dXJxdW9pc2U6ICM0NGRkZDA7XG4kZ3JlZW46ICMyN2Q3YTE7XG4kbGlnaHQtZ3JlZW46ICM0NWY2OWU7XG4kYmxhY2s6ICMxYjFkMWQ7XG4kbGlnaHQ6ICNmOGY4Zjg7XG5cbi8vIFVwZGF0ZSBCdWxtYSdzIGdsb2JhbCB2YXJpYWJsZXNcblxuJGZhbWlseS1zYW5zLXNlcmlmOiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuJHByaW1hcnk6ICRncmVlbjtcbiRsaW5rOiAkdHVycXVvaXNlO1xuXG4vLyBVcGRhdGUgc29tZSBvZiBCdWxtYSdzIGNvbXBvbmVudCB2YXJpYWJsZXNcblxuJGNvbnRyb2wtYm9yZGVyLXdpZHRoOiAycHg7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRpbnB1dC1zaGFkb3c6IG5vbmU7XG5cbi8vIEN1c3RvbSBHbG9iYWwgU3R5bGVzIChBcHBsaWVkIHRvIGVudGlyZSBhcHApXG5cbmh0bWx7XG4gICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgJHR1cnF1b2lzZSwgJGdyZWVuKTtcbiAgICBiYWNrZ3JvdW5kOiAjZGFhZDViICFpbXBvcnRhbnQ7XG59XG5cbmh0bWwsIGJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1hcmdpbjogMDsgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4vLyBFcnJvciBNZXNzYWdlcyBTdHlsZXM6XG5cbi5lcnJvci1tZXNzYWdle1xuICAgIGNvbG9yOiByZWQ7XG59XG4uaXMtaW52YWxpZHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG59XG5cbi5tb2RhbC1ib3h7XG4gICAgbWluLWhlaWdodDogMzE4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMSU7XG4gICAgbWF4LXdpZHRoOiA1ODBweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMzVweDtcbn1cblxuLnRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBjb2xvcjogI2RjYTIzOCAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1wYWdlLWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDglO1xufVxuXG4uaG9tZS1pbmZvLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNpZ251cC1wYWdlLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDYlO1xufVxuXG4ubG9naW4tcGFnZS1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA4JTtcbn1cblxuLm5ldy1jYXRlZ29yeS1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTQlO1xufVxuXG4uZWRpdC1jYXRlZ29yeS1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTQlO1xufVxuXG4ubmV3LXJlY2lwZS1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4ucmVjaXBlLXZpZXctY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDg4JTtcbiAgICBwYWRkaW5nLXRvcDogMyU7XG59XG5cbi8qIE1lZGlhIFF1ZXJpZXM6ICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NjhweCl7XG4gICAgLnNpZ251cC1ib3h7XG4gICAgICAgIHdpZHRoOiAyM2VtO1xuICAgIH1cbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYXRvOjQwMCw3MDB8TnVuaXRvOjQwMCw3MDBcIik7XG5odG1sIHtcbiAgYmFja2dyb3VuZDogI2RhYWQ1YiAhaW1wb3J0YW50O1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogcmVkO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuLm1vZGFsLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDMxOHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMSU7XG4gIG1heC13aWR0aDogNTgwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDM1cHg7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogI2RjYTIzOCAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1wYWdlLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogOCU7XG59XG5cbi5ob21lLWluZm8tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zaWdudXAtcGFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA2JTtcbn1cblxuLmxvZ2luLXBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogOCU7XG59XG5cbi5uZXctY2F0ZWdvcnktY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNCU7XG59XG5cbi5lZGl0LWNhdGVnb3J5LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTQlO1xufVxuXG4ubmV3LXJlY2lwZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cblxuLnJlY2lwZS12aWV3LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDMlO1xufVxuXG4vKiBNZWRpYSBRdWVyaWVzOiAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDY4cHgpIHtcbiAgLnNpZ251cC1ib3gge1xuICAgIHdpZHRoOiAyM2VtO1xuICB9XG59XG4ucmVjaXBlLW1hbmFnZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwMHB4O1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbn1cblxuLnNpZGViYXIge1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA0MnB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcbn1cblxuLnNpZGViYXItaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEyZW07XG59XG5cbi5jYXRlZ29yeS1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDgwJTtcbn1cblxuLmNhdGVnb3J5LW1lbnUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG59XG4uY2F0ZWdvcnktbWVudSAuY2F0ZWdvcnktbWVudS1pdGVtIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM1ZjVmNWY7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jYXRlZ29yeS1tZW51IC5jYXRlZ29yeS1tZW51LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xufVxuLmNhdGVnb3J5LW1lbnUgLmNhdGVnb3J5LW1lbnUtaXRlbS5pcy1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRjZmNmO1xuICBjb2xvcjogIzFiMWQxZDtcbn1cblxuLm1haW4tcmVjaXBlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiA0MnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MTUxO1xufVxuXG4ubWFpbi1yZWNpcGUtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJlY2lwZS1saXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA2NXZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucmVjaXBlLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgdHJhbnNmb3JtIGVhc2UgMC4ycztcbn1cbi5yZWNpcGUtY29udGFpbmVyOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNlZWU7XG59XG4ucmVjaXBlLWNvbnRhaW5lciAucmVjaXBlLWhlYWRlciB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucmVjaXBlLWNvbnRhaW5lciAucmVjaXBlLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYWRkLXJlY2lwZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2JTtcbiAgdG9wOiA1JTtcbiAgd2lkdGg6IDYlO1xuICBiYWNrZ3JvdW5kOiAjZThiZjcyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiNhZGQtcmVjaXBlLWluZm8ge1xuICB3aWR0aDogOCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2U4YmY3MjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uY2F0ZWdvcnktYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYWRkLWNhdGVnb3J5IHtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiAjZThiZjcyO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5uZXdSZWNpcGVEaXNhYmxlZCB7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZW1wdHktcmVjaXBlLWxpc3Qge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZGZkO1xuICB3aWR0aDogODQlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xufVxuXG4uaXMtY2F0ZWdvcnktZW1wdHkge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmZGZkO1xuICB3aWR0aDogODQlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDclO1xufVxuXG4uZXhwYW5zaW9uLXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG4uZXhwYW5zaW9uLWhlYWRlcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJkY2RjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZXhwYW5zaW9uLWhlYWRlcnM6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZGNkYztcbn1cblxuLnJlY2lwZUltYWdlIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLnJlY2lwZUltYWdlID4gaW1nIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbn1cblxuLyogTWVkaWEgUXVlcmllczogKi9cbi8qIERlc2t0b3AgbWVudSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gIC5zaWRlYmFyIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnNpZGViYXItaGVhZGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDg0dnc7XG4gIH1cblxuICAuY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICB3aWR0aDogODR2dztcbiAgfVxuXG4gIC5jYXRlZ29yeS1tZW51IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICB3aWR0aDogODl2dztcbiAgfVxuICAuY2F0ZWdvcnktbWVudSAuY2F0ZWdvcnktbWVudS1pdGVtIHtcbiAgICB3aWR0aDogMjZ2dztcbiAgfVxuXG4gICNhZGQtY2F0ZWdvcnkge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLnJlY2lwZS1tYW5hZ2VyLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5yZWNpcGVJbWFnZSB7XG4gICAgd2lkdGg6IDQwdnc7XG4gIH1cblxuICAjYWRkLXJlY2lwZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNyU7XG4gICAgcmlnaHQ6IDklO1xuICAgIHdpZHRoOiA3dnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG5cbiAgI2FkZC1yZWNpcGUtaW5mbyB7XG4gICAgd2lkdGg6IDd2dztcbiAgfVxufSIsIkBpbXBvcnQgJy4uLy4uLy4uL21haW4tc3R5bGVzLnNjc3MnO1xuXG4ucmVjaXBlLW1hbmFnZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbn1cblxuLy8gU2lkZWJhciBTdHlsZXM6XG4uc2lkZWJhcntcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogNDJweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xufVxuXG4uc2lkZWJhci1oZWFkZXItY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTJlbTtcbn1cblxuLy8gQ2F0ZWdvcnkgTGlzdCBTdHlsZXM6XG4uY2F0ZWdvcnktY29udGFpbmVye1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgaGVpZ2h0OiA4MCU7XG59XG4uY2F0ZWdvcnktbWVudXtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAuY2F0ZWdvcnktbWVudS1pdGVte1xuICAgICAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjb2xvcjogIzVmNWY1ZjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbGlnaHQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJi5pcy1hY3RpdmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRjZmNmO1xuICAgICAgICAgICAgY29sb3I6ICRibGFjaztcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vLyBSZWNpcGUgQ29udGFpbmVyIFN0eWxlczpcblxuLm1haW4tcmVjaXBlLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiA0MnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTI1MTUxO1xuXG59XG5cbi5tYWluLXJlY2lwZS1oZWFkZXJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvLyBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgLy8gZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvLyAudGl0bGV7XG4gICAgLy8gICAgIGZsZXgtZ3JvdzogMTtcbiAgICAvLyAgICAgbWFyZ2luOiAwO1xuICAgIC8vIH1cbn1cblxuLnJlY2lwZS1saXN0LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjV2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4ucmVjaXBlLWNvbnRhaW5lciB7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjJzIGVhc2UsXG4gICAgdHJhbnNmb3JtIGVhc2UgMC4ycztcblxuICAgIC8vICY6YWN0aXZlIHtcbiAgICAvLyAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgLy8gfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggI2VlZTtcblxuICAgICAgICAvLyAucmVjaXBlLWJ1dHRvbnN7XG4gICAgICAgIC8vICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAvLyAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC5yZWNpcGUtaGVhZGVye1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5yZWNpcGUtYnV0dG9uc3tcbiAgICAgICAgLy8gb3BhY2l0eTogMDtcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcbiAgICAgICAgLy8gdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxufVxuXG4vLyBCdXR0b24gU3R5bGVzOlxuI2FkZC1yZWNpcGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNiU7XG4gICAgdG9wOiA1JTtcbiAgICB3aWR0aDogNiU7XG4gICAgYmFja2dyb3VuZDogI2U4YmY3MjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4jYWRkLXJlY2lwZS1pbmZve1xuICAgIHdpZHRoOiA4JTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2U4YmY3MjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2F0ZWdvcnktYnV0dG9uLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNhZGQtY2F0ZWdvcnl7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgYmFja2dyb3VuZDogI2U4YmY3MjtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG5cbi8vIERpc2FibGVkIE5ldyBSZWNpcGUgQnV0dG9uXG4ubmV3UmVjaXBlRGlzYWJsZWR7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8vIEVtcHR5IFN0YXRlcyBTdHlsZXM6XG4uZW1wdHktcmVjaXBlLWxpc3R7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZGZkO1xuICAgIHdpZHRoOiA4NCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAlO1xufVxuXG4uaXMtY2F0ZWdvcnktZW1wdHl7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZGZkOztcbiAgICB3aWR0aDogODQlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ3JTtcbn1cblxuLy8gRXhwYW5zaW9uIFBhbmVsIFN0eWxlczpcbi5leHBhbnNpb24tcGFuZWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG4uZXhwYW5zaW9uLWhlYWRlcnN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZGNkYztcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAmOmFjdGl2ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZGNkYztcbiAgICB9XG59XG5cbi8vIFJlY2lwZSBJbWFnZSBTdHlsZXM6XG4ucmVjaXBlSW1hZ2V7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG59XG4ucmVjaXBlSW1hZ2UgPiBpbWd7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgbWF4LWhlaWdodDogNTAlO1xufVxuXG5cbi8qIE1lZGlhIFF1ZXJpZXM6ICovXG5cbi8vIEZvciBNb2JpbGVcbi8vIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDQ2OHB4KXtcbi8vICAgICAuc2lkZWJhcntcbi8vICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgfVxuLy8gICAgIC5zaWRlYmFyLWhlYWRlci1jb250YWluZXJ7XG4vLyAgICAgICAgIHdpZHRoOiA4NHZ3O1xuLy8gICAgIH1cblxuLy8gICAgIC5jYXRlZ29yeS1jb250YWluZXJ7XG4vLyAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4vLyAgICAgICAgIGhlaWdodDogMjB2aDtcbi8vICAgICAgICAgd2lkdGg6IDg0dnc7XG4vLyAgICAgfVxuICAgIFxuLy8gICAgIC5jYXRlZ29yeS1tZW51e1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuLy8gICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XG4vLyAgICAgICAgIHdpZHRoOiA4OXZ3O1xuXG4vLyAgICAgICAgIC5jYXRlZ29yeS1tZW51LWl0ZW17XG4vLyAgICAgICAgICAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xuLy8gICAgICAgICAgICAgLy8gaGVpZ2h0OiA3MCU7XG4vLyAgICAgICAgICAgICB3aWR0aDogMjZ2dztcbi8vICAgICAgICAgfVxuICAgICAgIFxuLy8gICAgIH1cblxuLy8gICAgICNhZGQtY2F0ZWdvcnl7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbi8vICAgICB9XG5cbi8vICAgICAucmVjaXBlLW1hbmFnZXItY29udGFpbmVye1xuLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIH1cblxuLy8gICAgIC5yZWNpcGVJbWFnZXtcbi8vICAgICAgICAgd2lkdGg6IDQwdnc7XG4vLyAgICAgfVxuXG4vLyAgICAgI2FkZC1yZWNpcGV7XG4vLyAgICAgICAgIHdpZHRoOiAxMXZ3O1xuLy8gICAgIH1cblxuLy8gICAgICNhZGQtcmVjaXBlLWluZm97XG4vLyAgICAgICAgIHdpZHRoOiAxMXZ3O1xuLy8gICAgIH1cbi8vIH1cblxuIC8qIERlc2t0b3AgbWVudSAqL1xuIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCl7XG5cbiAgICAuc2lkZWJhcntcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5zaWRlYmFyLWhlYWRlci1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA4NHZ3O1xuICAgIH1cblxuICAgIC5jYXRlZ29yeS1jb250YWluZXJ7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgd2lkdGg6IDg0dnc7XG4gICAgfVxuICAgIFxuICAgIC5jYXRlZ29yeS1tZW51e1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LWZsb3c6IHdyYXA7XG4gICAgICAgIHdpZHRoOiA4OXZ3O1xuXG4gICAgICAgIC5jYXRlZ29yeS1tZW51LWl0ZW17XG4gICAgICAgICAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICB3aWR0aDogMjZ2dztcbiAgICAgICAgfVxuICAgICAgIFxuICAgIH1cblxuICAgICNhZGQtY2F0ZWdvcnl7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAucmVjaXBlLW1hbmFnZXItY29udGFpbmVye1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5yZWNpcGVJbWFnZXtcbiAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgfVxuXG4gICAgI2FkZC1yZWNpcGV7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA3JTtcbiAgICAgICAgcmlnaHQ6IDklO1xuICAgICAgICB3aWR0aDogN3Z3O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgI2FkZC1yZWNpcGUtaW5mb3tcbiAgICAgICAgd2lkdGg6IDd2dztcbiAgICB9XG5cbiB9Il19 */");

/***/ }),

/***/ "./src/app/pages/recipe-view/recipe-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/recipe-view/recipe-view.component.ts ***!
  \************************************************************/
/*! exports provided: RecipeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeViewComponent", function() { return RecipeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../alertify.service */ "./src/app/alertify.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_recipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/recipe.service */ "./src/app/recipe.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6__);







pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_6___default.a.pdfMake.vfs;
let RecipeViewComponent = class RecipeViewComponent {
    constructor(recipeService, route, router, alertify) {
        this.recipeService = recipeService;
        this.route = route;
        this.router = router;
        this.alertify = alertify;
        // Boolean values for expansion panels
        this.panelOpenStateIngred = false;
        this.panelOpenStateDirect = false;
        // Boolean value for when Categories are empty
        this.categoriesEmpty = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.categoryId) {
                this.selectedCategoryId = params.categoryId;
                // Passing the active Params (categoryId) to getRecipes
                // inorder to obtain all recipes for a certain Category
                this.recipeService.getRecipes(params.categoryId)
                    .subscribe((recipes) => {
                    // Show the most recently created recipe at the top
                    this.recipes = recipes.slice().reverse();
                    // console.log('Recipes: ', this.recipes);
                });
            }
            else {
                this.recipes = undefined;
            }
        });
        // Subscribing to Observeable to get an array of all existing Categories
        this.recipeService.getCategory()
            .subscribe((categories) => {
            this.categories = categories;
            // console.log('Categories: ', this.categories);
            // If no Categories have been created, disable the 'plus' button
            // For creating a new recipe
            if (this.categories.length === 0) {
                this.categoriesEmpty = true;
            }
        });
        // Attaining Login Info
        const getInfo = localStorage.getItem('login-info');
        const parseInfo = JSON.parse(getInfo);
        this.loggedInInfo = parseInfo;
    }
    // Convience function to check if Object is empty
    isEmptyObject(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    // Using pdfmake
    openRecipeInfoPdf(recipeName, recipeImageBlob, ingredientInfo, directions) {
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
                            [ingredientInfo]
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
                            [directions]
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
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.createPdf(docDefinition).open();
    }
    saveRecipeInfoPdf(recipeName, recipeImageBlob, ingredientInfo, directions) {
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
                            [ingredientInfo]
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
                            [directions]
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
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_5___default.a.createPdf(docDefinition).download(`${recipeName}-recipe.pdf`);
    }
    // Function for setting Ingredients Info
    getIngredientInfo(ingredientInfo) {
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
        };
    }
    // Function for setting up image for external PDF file
    getRecipePhoto(imageBlob) {
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
            this.recipeImagePdf = reader.result;
        };
        reader.readAsDataURL(file);
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }
    // Function to Delete Categories
    onDeleteCategoryClick(selectedCategoryId) {
        const getCategoryName = this.categories.filter(val => val._id === selectedCategoryId);
        this.alertify.confirm(`Are you sure you want to delete '${getCategoryName[0].categoryName}' Category?`, () => {
            this.recipeService.deleteCategory(selectedCategoryId).subscribe(() => {
                this.router.navigate(['/app-recipe-view']);
            }, error => {
                this.alertify.error(error);
            });
        });
    }
    // Function to delete Recipes
    onDeleteRecipeClick(recipeId) {
        const getRecipeName = this.recipes.filter(val => val._id === recipeId);
        this.alertify.confirm(`Are you sure you want to delete '${getRecipeName[0].recipeName}' Recipe?`, () => {
            this.recipeService.deleteRecipe(this.selectedCategoryId, recipeId)
                .subscribe(() => {
                this.recipes = this.recipes.filter(val => val._id !== recipeId);
            }, error => {
                this.alertify.error('Could not delete Recipe!');
            });
        });
    }
};
RecipeViewComponent.ctorParameters = () => [
    { type: src_app_recipe_service__WEBPACK_IMPORTED_MODULE_3__["RecipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"] }
];
RecipeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-recipe-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/recipe-view/recipe-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-view.component.scss */ "./src/app/pages/recipe-view/recipe-view.component.scss")).default]
    })
], RecipeViewComponent);



/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup-box {\n  padding: 35px;\n  background: white;\n  border-radius: 5px;\n  max-width: 40em;\n}\n\n.signup-info {\n  font-size: 15px;\n  margin-left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbnJvbWVyby9EZXNrdG9wL0FuZ3VsYXJfUHJvamVjdHMvUmVjaXBlX0NvbGxlY3Rvci9mcm9udGVuZC9zcmMvYXBwL3BhZ2VzL3NpZ251cC1wYWdlL3NpZ251cC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAtcGFnZS9zaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWdudXAtcGFnZS9zaWdudXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtYm94e1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1heC13aWR0aDogNDBlbTtcbiAgICAvLyB3aWR0aDogNDAlO1xuICAgIC8vIHdpZHRoOiAzNTBweDtcbiAgICAvLyBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG4uc2lnbnVwLWluZm97XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufSIsIi5zaWdudXAtYm94IHtcbiAgcGFkZGluZzogMzVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiA0MGVtO1xufVxuXG4uc2lnbnVwLWluZm8ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/signup-page/signup-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/signup-page/signup-page.component.ts ***!
  \************************************************************/
/*! exports provided: SignupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageComponent", function() { return SignupPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let SignupPageComponent = class SignupPageComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        // Helpful variables for error handling
        this.inputErrorMessage = 'Invalid Email or Password.';
        // Boolean to check when the form was submitted
        this.submitted = false;
    }
    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
                ]]
        });
    }
    // Simple getter function for FormControls
    get f() {
        return this.signUpForm.controls;
    }
    onSignupClicked(email, password) {
        this.submitted = true;
        this.authService.signup(email, password).subscribe((res) => {
            if (res.status === 200) {
                // Were able to make an account
                // Re-direct user to login page
                this.router.navigate(['/login']);
            }
        }, (err) => {
            // If error upon signing up
            this.errorMessage = this.inputErrorMessage;
            // console.log('Signup Error: ', err);
            // duplicateUser will recieve an error message when the email already exists
            this.duplicateUser = err.error.duplicateUser;
        });
    }
};
SignupPageComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
SignupPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-signup-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup-page/signup-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup-page.component.scss */ "./src/app/pages/signup-page/signup-page.component.scss")).default]
    })
], SignupPageComponent);



/***/ }),

/***/ "./src/app/recipe.service.ts":
/*!***********************************!*\
  !*** ./src/app/recipe.service.ts ***!
  \***********************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _web_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-request.service */ "./src/app/web-request.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let RecipeService = class RecipeService {
    constructor(webRequestService) {
        this.webRequestService = webRequestService;
    }
    // Create a new Category
    createCategory(categoryName) {
        return this.webRequestService.post('categories', { categoryName });
    }
    // Return one single Category based off categoryId
    getSingleCategory(categoryId) {
        return this.webRequestService.get(`categories/${categoryId}`);
    }
    // Update a Category
    updateCategory(categoryId, categoryName) {
        return this.webRequestService.patch(`categories/${categoryId}`, categoryName);
    }
    // Get all created Categories
    getCategory() {
        return this.webRequestService.get('categories');
    }
    // Delete a specified Category
    deleteCategory(categoryId) {
        return this.webRequestService.delete(`categories/${categoryId}`);
    }
    // Get Recipes for a certain Category
    getRecipes(categoryId) {
        return this.webRequestService.get(`categories/${categoryId}/recipes`);
    }
    // Create a new Recipe
    createRecipe(recipeName, ingredientsInfo, directions, recipeImage, recipeImageBlob, categoryId) {
        const formData = new FormData();
        formData.append('recipeName', recipeName);
        formData.append('ingredientsInfo', ingredientsInfo);
        formData.append('directions', directions);
        formData.append('recipeImage', recipeImage);
        formData.append('recipeImageBlob', recipeImageBlob);
        return this.webRequestService.post(`categories/${categoryId}/recipes`, formData);
    }
    // Delete a Recipe
    deleteRecipe(categoryId, recipeId) {
        return this.webRequestService.delete(`categories/${categoryId}/recipes/${recipeId}`);
    }
    // Update specified Recipe
    updateRecipe(categoryId, recipeId, formData) {
        return this.webRequestService.patch(`categories/${categoryId}/recipes/${recipeId}`, formData);
    }
    // Get one Recipe based on recipeId
    getSingleRecipe(categoryId, recipeId) {
        return this.webRequestService.get(`categories/${categoryId}/recipes/${recipeId}`);
    }
};
RecipeService.ctorParameters = () => [
    { type: _web_request_service__WEBPACK_IMPORTED_MODULE_1__["WebRequestService"] }
];
RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RecipeService);



/***/ }),

/***/ "./src/app/web-req-interceptor.ts":
/*!****************************************!*\
  !*** ./src/app/web-req-interceptor.ts ***!
  \****************************************/
/*! exports provided: WebReqInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebReqInterceptor", function() { return WebReqInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let WebReqInterceptor = class WebReqInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.accessTokenRefreshed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    intercept(request, next) {
        // Handle the request
        request = this.addAuthHeader(request);
        // call next() and handle the response
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            // console.log('HTTP ERROR: ', error);
            if (error.status === 401) {
                // 401 error so we are unauthorized
                // refresh the access token
                return this.refreshAccessToken()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
                    request = this.addAuthHeader(request);
                    return next.handle(request);
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
                    // console.log('Catch Error: ' + err);
                    this.authService.logout();
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    refreshAccessToken() {
        if (this.refreshingAccessToken) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
                this.accessTokenRefreshed.subscribe(() => {
                    // this code will run when the access token has been refreshed
                    observer.next();
                    observer.complete();
                });
            });
        }
        else {
            this.refreshingAccessToken = true;
            // we want to call a method in the auth service to send a request to refresh the access token
            return this.authService.getNewAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
                console.log('Access Token Refreshed!');
                this.refreshingAccessToken = false;
                this.accessTokenRefreshed.next();
            }));
        }
    }
    addAuthHeader(request) {
        // get the access token
        const token = this.authService.getAccessToken();
        if (token) {
            // append the access token to the request header
            return request.clone({
                setHeaders: {
                    'x-access-token': token
                }
            });
        }
        return request;
    }
};
WebReqInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
WebReqInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WebReqInterceptor);



/***/ }),

/***/ "./src/app/web-request.service.ts":
/*!****************************************!*\
  !*** ./src/app/web-request.service.ts ***!
  \****************************************/
/*! exports provided: WebRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebRequestService", function() { return WebRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let WebRequestService = class WebRequestService {
    // readonly ROOT_URL;
    constructor(http) {
        this.http = http;
        // ${this.ROOT_URL}/
        // this.ROOT_URL = 'http://localhost:8080';
    }
    get(uri) {
        // return this.http.get(`${this.ROOT_URL}/${uri}`);
        return this.http.get(`${uri}`);
    }
    post(uri, payload) {
        // return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
        return this.http.post(`${uri}`, payload);
    }
    patch(uri, payload) {
        // return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
        return this.http.patch(`${uri}`, payload);
    }
    delete(uri) {
        // return this.http.delete(`${this.ROOT_URL}/${uri}`);
        return this.http.delete(`${uri}`);
    }
    login(email, password) {
        // return this.http.post(`${this.ROOT_URL}/users/login`, {
        //   email,
        //   password
        // }, {
        //   observe: 'response'
        // });
        return this.http.post(`users/login`, {
            email,
            password
        }, {
            observe: 'response'
        });
    }
    signup(email, password) {
        // return this.http.post(`${this.ROOT_URL}/users`, {
        //   email,
        //   password
        // }, {
        //   observe: 'response'
        // });
        return this.http.post(`users`, {
            email,
            password
        }, {
            observe: 'response'
        });
    }
};
WebRequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WebRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WebRequestService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aaronromero/Desktop/Angular_Projects/Recipe_Collector/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map