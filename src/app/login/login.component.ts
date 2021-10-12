import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { EcomService } from '../ecom.service';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ecom:EcomService,private social:SocialAuthService,private router:Router) { }

  ngOnInit(): void {
  }
  validate(user:any)
  {
    console.log(user.value);
this.ecom.verify(user.value).subscribe(data=>{
  console.log(data.message);
  if(data.message=="not valid credentials" || data.message=="email does not exists")
  {
    alert("Not Existing user please register to continue");
    this.router.navigateByUrl("/registerComponent")
  }
  else{
    alert("login Successful you can browse products!!")
  localStorage.setItem("login",data.message);
  console.log(data.message);
  }
  
})
  }
  signin():void{
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID).then(data =>{
      console.log(data);
      localStorage.setItem('googlelogin','google');
     
    })
     }

}
