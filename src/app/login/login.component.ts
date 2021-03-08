import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  password = new FormControl('');

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.password.value);
    if (this.authService.loggedIn) {
      this.router.navigate([""]);
    } else {
      this._snackBar.open("wrong password", "close", {
        duration: 2000,
      });
    }
  }
}
