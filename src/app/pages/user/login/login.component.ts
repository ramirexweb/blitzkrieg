import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public goToRegister() {
    this.router.navigate(['/user/register']);
  }

  onLogin(form: FormGroup) {

    // if ( !form.valid ) {
    //   swal('Login Usuario', 'Formulario no valido', 'error');
    // } else {
    //   return this.authService.loginUser(form.controls.email.value, form.controls.password.value)
    //     .subscribe( data => {

    //       if ( data.error != null ) {
    //         this.authService.session_failed( form.controls.email.value, form.controls.password.value )
    //           .subscribe( resp => console.log(resp), err => console.log(err));
    //         swal('Login', data.error, 'error');
    //       }
    //       if ( data.user != null ) {

    //         if ( data.user.state === 'register' ) {
    //           swal('Login', 'El Administrador, tiene que activar su cuenta', 'warning');
    //           return;
    //         }

    //         if ( data.user.state === 'disable' ) {
    //           swal('Login', 'Usuario  dado de baja', 'error');
    //           return;
    //         }

    //         this.authService.setUser(data.user);
    //         console.log('state: ', data.user.state);
    //         this.authService.setToken(data.user.token);
    //         this.authService.session_entry(data.user._id, data.user.email, data.user.token)
    //           .subscribe( resp => console.log(resp), err => console.log(err));
    //         this.router.navigate(['/user/profile']);
    //         setTimeout(() => {
    //           location.reload();
    //         }, 500);
    //       }
    //     });
    // }
  }

}
