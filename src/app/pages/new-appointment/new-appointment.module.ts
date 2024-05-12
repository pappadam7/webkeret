import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAppointmentRoutingModule } from './new-appointment-routing.module';
import { NewAppointmentComponent } from './new-appointment.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms"; // vagy MatMomentDateModule, ha a moment.js-t használod



@NgModule({
  declarations: [
    NewAppointmentComponent
  ],
  imports: [
    CommonModule,
    NewAppointmentRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    FormsModule,
    // vagy MatMomentDateModule
  ]
})
export class NewAppointmentModule { }
