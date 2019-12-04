import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  //Helpful variables for error handling
  inputErrorMessage = "Invalid Email or Password."
  errorMessage: string;
  duplicateUser: string;

  //Declaring FormGroup
  signUpForm: FormGroup;

  //Boolean to check when the form was submitted
  submitted = false;

  constructor( private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        ]]
    });
  }

  // Simple getter function for FormControls
  get f() { 
    return this.signUpForm.controls; 
  }

  onSignupClicked(email: string, password: string){

    this.submitted = true;
    
    this.authService.signup(email, password).subscribe(
      (res: HttpResponse<any>) => {
      if(res.status === 200){
        // Were able to make an account
        // Re-direct user to login page
        this.router.navigate(['/login']);
      }
    },
      (err) => {
        // If error upon signing up
        this.errorMessage = this.inputErrorMessage;
        console.log("Signup Error: ", err);
        
        // duplicateUser will recieve an error message when the email already exists
        this.duplicateUser = err.error.duplicateUser;

        // if(this.duplicateUser){
        //   console.log("Error (User exists)");
        // } else {
        //   this.errormessage = err.error
        //   console.log("Errors (from backend): ", err.error);
        // }

      }
    )
  }

}
