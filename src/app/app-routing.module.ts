import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './core/component/signin/signin.component';
import { NavbarComponent } from './core/component/navbar/navbar.component';
import { EmployeeComponent } from './core/component/employee/employee.component';
import { DepartmentComponent } from './core/component/department/department.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsComponent } from './core/component/forms/forms.component';
import { HomeComponent } from './core/component/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'nav', component: NavbarComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'forms/:mode/:id', component: FormsComponent, title: 'Forms' },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
