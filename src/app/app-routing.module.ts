import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './scenes/home/home.component';
import { AuthGuard, LoginIn } from './auth/auth-guard.guard';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginIn]   },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddComponent, canActivate: [AuthGuard] }

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
