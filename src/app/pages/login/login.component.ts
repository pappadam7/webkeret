import {Component, OnDestroy} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/sevices/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnDestroy{
  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  login() {
    this.loading = true;
    this.authService.login(this.email.value as string, this.password.value as string).then( cred => {
      console.log(cred)
      this.router.navigateByUrl('/home');
      this.loading = false;
    }).catch(error => {
      console.error(error);
      this.loading = false;
    })


  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }
}
