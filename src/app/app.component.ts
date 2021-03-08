import { Component } from '@angular/core';
import { AuthService } from './service/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = true;
  constructor(private authService: AuthService, private router: Router) {}
  
  title = 'stock-user-management';

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
