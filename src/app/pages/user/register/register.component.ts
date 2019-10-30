import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/user/auth.service';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public register: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.register = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[^@]*@[^@]*')]],
      telefono: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      reply: ['', [Validators.required]]
    });
  }

  public goToLogin() {
    this.router.navigate(['/user/login']);
  }

  onRegister(form: FormGroup): void {

    if ( !form.valid ) {
      swal.fire('Registo Usuario.', 'Error en Registro de usuario', 'error');
    } else {

      if (form.controls.password.value !== form.controls.reply.value ) {
        swal.fire('Registro Usuario', 'Los datos ingresado del Password, no son iguales', 'error');
        return;
      }
      // this.authService.registerUser(
      //   form.controls.name.value,
      //   form.controls.lastname.value,
      //   form.controls.email.value,
      //   form .controls.password.value
      // ).subscribe( data => {
      //   const data_info: any = data;

      //   if ( data_info.error != null ) {
      //     swal('Registro Usuario', data_info.error, 'error');
      //   }

      //   if ( data_info.status != null ) {
      //     swal('Registro Usuario', 'registrado con exito', 'success');
      //     this.router.navigate(['/user/login']);
      //   }
      // }, err => console.log(err));
    }
  }

}
