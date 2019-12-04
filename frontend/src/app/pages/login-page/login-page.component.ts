import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  //Helpful variables for error handling
  emailPasswordErrorMessage = "The username and password you specified are invalid. Please try again."
  errorMessage: string;

  //Declaring FormGroup
  loginForm: FormGroup;

  //Boolean to check when the form was submitted
  submitted = false;

  selectedCategoryId: string;


  constructor( private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required
      ]]
    });

    // this.route.params.subscribe((params: Params) => {
    //   // if(params.categoryId){
    //     this.selectedCategoryId = params.categoryId;
       
    //   // }
      
    // })
  }

  // Simple getter function for FormControls
  get f() { 
    return this.loginForm.controls; 
  }

  onLoginClicked(email: string, password: string){
    this.submitted = true;

    this.authService.login(email, password).subscribe(
      (res: HttpResponse<any>) => {
      
      if(res.status == 200){
        // Thus user has logged in!
        this.router.navigate(['/categories']);
      }
    }, 
      (err) =>{
        // If error upon logging in
        this.errorMessage = this.emailPasswordErrorMessage;
        console.log("Login Error: ", err);

      }
    )
  }

}
