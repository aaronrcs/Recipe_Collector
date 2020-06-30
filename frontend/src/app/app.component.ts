import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'R.C';
  signedUpMessage: boolean;
  sub: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.authService.getSignUpStatus().subscribe(res =>
    //   this.signedUpMessage = res
    // );
  }
  // closeNotification() {
  //   this.signedUpMessage = false;
  // }

}
