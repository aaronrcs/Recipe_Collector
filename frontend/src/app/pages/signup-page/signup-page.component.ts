import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignupClicked(email: string, password: string){
    this.authService.signup(email, password).subscribe((res: HttpResponse<any>) => {
      if(res.status === 200){
        // Were able to make an account
        // Re-direct user to login page
        this.router.navigate(['/login']);
      }
    })
  }

}
