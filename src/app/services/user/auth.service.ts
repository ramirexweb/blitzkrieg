import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUser(user: Usuario): void {
    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);
  }

  getCurrentUser() {
    const userString = localStorage.getItem('currentUser');
    if ( userString ) {
      return JSON.parse(userString);
    } else {
      return null;
    }
  }
}
