import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from "@login/signup";
import { ForgotComponent } from "@login/forgot";
import { SigninComponent } from "@login/signin";
import { FooterComponent, HeaderComponent } from "@login/shared";

import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  declarations: [
    ForgotComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
