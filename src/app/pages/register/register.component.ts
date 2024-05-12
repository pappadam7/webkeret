import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/sevices/auth.service";
import {User} from "../../shared/models/User";
import {UserService} from "../../shared/sevices/user.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  onSubmit() {
    console.log(this.registerForm.value);
    // @ts-ignore
    this.authService.signup(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then((cred: any) =>{
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.registerForm.get('email')?.value as string,
        name: {
          firstname: this.registerForm.get('name.firstname')?.value as string,
          lastname: this.registerForm.get('name.lastname')?.value as string
        }
      };
      this.userService.create(user).then( _ =>{
        console.log('User added')
      }).catch( error => {
          console.error(error)
        }
      )
    }).catch((error: any) => {
      console.error(error);
    });
    this.router.navigateByUrl('/home');
  }
}
