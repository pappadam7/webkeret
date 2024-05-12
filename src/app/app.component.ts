import {Component, OnInit} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {AuthService} from "./shared/sevices/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tetovalo-szalon';
  loggedInUser?: firebase.default.User | null;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(this.loggedInUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }


  logout(_?: boolean){
    this.authService.logout().then(() =>
    {console.log(' Log out Success!');
    }).catch( error => {
      console.error(error);}
    );
  }
}
