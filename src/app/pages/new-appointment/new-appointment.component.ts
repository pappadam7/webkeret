import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Appointment} from "../../shared/models/Appointment";
import {AppointmentService} from "../../shared/sevices/appointment.service";
import {User} from "../../shared/models/User";
import { UserService } from "../../shared/sevices/user.service";

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit {
    user?: User;
    appointment?: Appointment;

    constructor( private appointmentService: AppointmentService, private userService: UserService){}

    ngOnInit(): void {
        const user = JSON.parse(localStorage.getItem('user') as string);
        this.userService.getById(user.uid).subscribe(data => {
            this.user = data;
        }, error => {
            console.error(error);
        });

    }

  onSubmit(formData: any): void {
    const selectedDate = formData.value.selectedDate;
    const message = formData.value.message;

    // Itt feldolgozhatod az adatokat, például elküldheted egy szerverre, kezelheted őket stb.
    console.log('Selected Date:', selectedDate);
    console.log('Message:', message);

    this.appointment  = {
        id: '',
        userId: this.user?.id as string, // Itt helyezd el a felhasználó azonosítóját
        date: new Date(),
        description: ''
    }
      this.appointmentService.create(formData.value as Appointment).then(_ => {
          console.log("Sikeres idopont")
      }).catch(error => {
          console.error(error);
      });
  }
}


