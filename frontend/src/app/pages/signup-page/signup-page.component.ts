import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { WebReqInterceptor } from 'src/app/web-req-interceptor';
import { Subscription, empty } from 'rxjs';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  emailErrormessage: string;
  passwordErrormessage: string;

  emptyEmail = "Email is required."
  emptyEmailMessage: string;

  emptyPassword = "Password is required."
  emptyPasswordMessage: string;

  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  onSignupClicked(email: string, password: string){
    
    this.authService.signup(email, password).subscribe(
      (res: HttpResponse<any>) => {
      if(res.status === 200){
        // Were able to make an account
        // Re-direct user to login page
        this.router.navigate(['/login']);
      }
    },
      (err) => {
        if(email.length === 0){
          this.emptyEmailMessage = this.emptyEmail;
        } else {
          this.emptyEmailMessage = '';
        }

        if(password.length === 0){
          this.emptyPasswordMessage = this.emptyPassword;
        } else {
          this.emptyPasswordMessage = '';
        }

        if(err.error.errors.hasOwnProperty('email')){
          this.emailErrormessage = err.error.errors.email.message;
        } else {
          this.emailErrormessage = '';
        }

        if(err.error.errors.hasOwnProperty('password')){
          this.passwordErrormessage = err.error.errors.password.message;
        } else {
          
          this.passwordErrormessage = ''
        }
      }
    )
  }

}
