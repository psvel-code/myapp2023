// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forms',
//   templateUrl: './forms.component.html',
//   styleUrls: ['./forms.component.scss']
// })
// export class FormsComponent {

// }
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { RoutingService } from 'src/app/shared/services/routing.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  @ViewChild('add') add!: TemplateRef<any>;
  employee_detail!: FormGroup //Declare formGroup
  designation: any;
  role: any;
  user = "employee";
  mode: string = "normal";
  msg!: Observable<any>;
  id: any;
  update = false;
  add_value = '';
  name: any

  constructor
    (
      private employee: EmployeeService,
      private activate: ActivatedRoute,//used to get param value
      private route: Router,
      private dialog: MatDialog,
      private http: RoutingService,
      private snackbar_service:SnackbarService
    ) { }
  message: any
  ngOnInit(): void {
 
    
    // Get designation and Role values============================================================
    this.employee.getDesignation().subscribe((res: any) => {
      console.log('forms designation', res.designation);
      this.designation = res.designation;
    });

    this.employee.getRole().subscribe((res: any) => {
      console.log('forms Role', res.role);
      this.role = res.role;
    });

    //==============================================form group and form control initialization ====================================== ============
    this.employee_detail = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      lastname: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      email: new FormControl(null),
      alternateEmail: new FormControl(null),
      created: new FormControl(null),
      modified: new FormControl(null),
      designationId: new FormControl(null),
      roleId: new FormControl(null),
    });
  
  }

  //Submit function==========================================================================
  onSubmit() {
  //   if (this.employee_detail.valid) {
  //     console.log('form data', this.employee_detail.value);
  //     if (this.update) {
  //       this.employee_detail.value.id = this.id;
  //       this.employee.updateEmployee(this.employee_detail.value).subscribe((res: any) => {
  //         this.snackbar_service.openSnackBar("Success_snackbar", "data updated succesfully");
  //       });
  //       this.route.navigate(["/nav/employee"]);
  //     }
  //     else {
  //       this.employee.createEmployee(this.employee_detail.value).subscribe((res: any) => {
  //         this.snackbar_service.openSnackBar("Success_snackbar", "data submitted succesfully");
  //       });
  //       this.route.navigate(["/nav/table"]);
  //     }
  //   }
  //   else {
  //     this.snackbar_service.openSnackBar("Error_snackbar", "Invalid Check your Data 😒");
  //   }
  // };
  }
}
