import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "@login/signup";
import {ForgotComponent} from "@login/forgot";
import {SigninComponent} from "@login/signin";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'in', component: SigninComponent },
      { path: 'up', component: SignupComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: '**', redirectTo: 'sign' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
