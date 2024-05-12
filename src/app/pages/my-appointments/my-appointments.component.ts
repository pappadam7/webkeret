import {Component, OnInit} from '@angular/core';
import {User} from "../../shared/models/User";
import {Appointment} from "../../shared/models/Appointment";
import {AppointmentService} from "../../shared/sevices/appointment.service";
import {UserService} from "../../shared/sevices/user.service";

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss']
})
export class MyAppointmentsComponent implements OnInit {
    user?: User;
    adatok?: Appointment[];

    constructor( private appointmentService: AppointmentService, private userService: UserService){}

    ngOnInit(): void {
        const user = JSON.parse(localStorage.getItem('user') as string);
        this.userService.getById(user.uid).subscribe(data => {
            this.user = data;
        }, error => {
            console.error(error);
        });
        this.appointmentService.getAppointmentsByUserId(user.uid).subscribe(data =>{
            this.adatok = data;
        });
    }

    formatDate(timestamp: any): string {
        const date = new Date(timestamp.seconds * 1000);
        return date.toISOString().split('T')[0];
    }

}
