import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SigninComponent } from './component/signin/signin.component';
import { TableComponent } from './component/table/table.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { DepartmentComponent } from './component/department/department.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './component/dialog/dialog.component';
import { FormsComponent } from './component/forms/forms.component';
import { SnackbarComponent } from './component/snackbar/snackbar.component';
import { HomeComponent } from './component/home/home.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SigninComponent,
    TableComponent,
    EmployeeComponent,
    DepartmentComponent,
    DialogComponent,
    FormsComponent,
    SnackbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
