import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  constructor(private social:SocialAuthService){}
  signout(){
this.social.signOut();
localStorage.removeItem('googlelogin');
localStorage.removeItem('login');
  }
}
