import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isToggled = false;
  loggedInInfo: any;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
   
     this.authService.getLoginInfo().subscribe(res => {
      let getInfo = localStorage.getItem('login-info');
      let parseInfo = JSON.parse(getInfo);

      this.loggedInInfo = parseInfo;
    })
  }
  signUp(){
    this.isToggled = !this.isToggled
    this.router.navigate(['/signup']);
  }
  login(){
    this.isToggled = !this.isToggled
    this.router.navigate(['/login']);
  }
  viewRecipes(){
    this.isToggled = !this.isToggled;
    this.router.navigate(['/app-recipe-view']);
  }

  logout(){
    this.isToggled = !this.isToggled
    localStorage.removeItem('login-info');
    localStorage.removeItem('user-id');
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-refresh-token');

    // Value now becomes 'null'
    this.loggedInInfo = localStorage.getItem('login-info')

    this.router.navigate(['/login']);
  }

  toggleMenuItem(){
    this.isToggled = !this.isToggled
  }

}
