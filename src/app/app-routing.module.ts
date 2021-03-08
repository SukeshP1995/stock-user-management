import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/auth-guard.service'
import { MainComponent } from './main/main.component'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: '', 
    component: MainComponent,
    canActivate:[AuthGuardService] 
  },
  {
    path: 'login', 
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
