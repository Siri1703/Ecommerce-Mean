import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsuploadComponent } from './productsupload/productsupload.component';
import {SocialAuthServiceConfig,SocialLoginModule,SocialAuthService, GoogleLoginProvider} from 'angularx-social-login';
import { HomeComponent } from './home/home.component';
import { BookproductsComponent } from './bookproducts/bookproducts.component';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component'
import { NgxImageZoomModule } from 'ngx-image-zoom';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductsuploadComponent,
    HomeComponent,
    BookproductsComponent,
    DisplayproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    ReactiveFormsModule,
    NgxImageZoomModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue:{
        autoLogin:false,
        providers:[
          {
            id:GoogleLoginProvider.PROVIDER_ID,
            provider:new GoogleLoginProvider(
              '341384935083-1p127qs0en6j8cstmgqbh41m0925bmq3.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig
       }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
