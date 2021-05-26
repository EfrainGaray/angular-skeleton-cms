import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from "@login/signup";
import { ForgotComponent } from "@login/forgot";
import { SigninComponent } from "@login/signin";
import { LoginRoutingModule } from './login-routing.module';
import { UiModule } from "@ui-admin/ui.module";


@NgModule({
  declarations: [
    ForgotComponent,
    SignupComponent,
    SigninComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        UiModule
    ]
})
export class LoginModule { }
