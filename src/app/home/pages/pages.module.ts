import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';



@NgModule({
  declarations: [
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderComponent,
    FooterComponent 
  ]
})
export class PagesModule { }
