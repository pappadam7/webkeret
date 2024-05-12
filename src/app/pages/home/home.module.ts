import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgOptimizedImage
    ]
})
export class HomeModule { }
