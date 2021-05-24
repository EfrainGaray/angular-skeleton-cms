import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {FormComponent} from "@admin/ui/organisms";
import {ButtonComponent, InputComponent} from "@admin/ui/atoms";
import {ContainerComponent} from "@admin/ui/objects";
import {
  ContainerButtonComponent,
  ContainerCallComponent,
  ContainerInputComponent,
  FooterComponent,
  HeaderComponent
} from "@admin/ui/molecules";





@NgModule({
  declarations: [
    ButtonComponent,
    ContainerButtonComponent,
    FormComponent,
    ContainerInputComponent,
    InputComponent,
    ContainerComponent,
    FooterComponent,
    HeaderComponent,
    ContainerCallComponent
  ],
  exports: [
    ButtonComponent,
    ContainerButtonComponent,
    FormComponent,
    ContainerInputComponent,
    InputComponent,
    ContainerComponent,
    FooterComponent,
    HeaderComponent,
    ContainerCallComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UiModule { }
