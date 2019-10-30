import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getCurrentUser() {
    // tslint:disable-next-line: variable-name
    const user_String = localStorage.getItem('currentUser');
    if ( user_String ) {
      return JSON.parse(user_String);
    } else {
      return null;
    }
  }
}
