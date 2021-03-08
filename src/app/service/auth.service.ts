import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
  }

  login(password: string) {
    if (password == "secre0Fd%")
     this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}