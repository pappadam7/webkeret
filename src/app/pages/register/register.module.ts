import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class RegisterModule { }
