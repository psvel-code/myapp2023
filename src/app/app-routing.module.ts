import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './core/component/signin/signin.component';
import { NavbarComponent } from './core/component/navbar/navbar.component';
import { EmployeeComponent } from './core/component/employee/employee.component';
import { DepartmentComponent } from './core/component/department/department.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsComponent } from './core/component/forms/forms.component';
import { HomeComponent } from './core/component/home/home.component';
import { CommentsComponent } from './core/component/comments/comments.component';
import { TimePipeComponent } from './core/component/time-pipe/time-pipe.component';
import { LoginGuard } from './auth/login.guard';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  {
    path: 'nav', component: NavbarComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent, title: 'Home' },
      { path: 'department', component: DepartmentComponent, title: 'Department' },
      { path: 'employee', component: EmployeeComponent, title: 'Employee' },
      { path: 'forms', component: FormsComponent, title: 'Forms' },
      { path: 'comments', component: CommentsComponent, title: 'Comments' },
      { path: 'time', component: TimePipeComponent, title: 'Time' },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
