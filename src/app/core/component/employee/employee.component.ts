import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {


  columns: any[] = [
    { columnDef: 'firstName', header: 'First Name', type: 'Text', sort: true },
    { columnDef: 'lastName', header: 'Last Name', type: 'Text', sort: true },
    { columnDef: 'email', header: ' Total Used', type: 'Number', sort: true },
    { columnDef: 'dateOfBirth', header: 'Date Of Birth', type: 'Number', sort: true }
  ];
  actions: any[] = [
    "description", "edit", "delete"
  ]
  datasource!: any;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'dateOfBirth', 'Action'];
  constructor(private employee: EmployeeService) { }
  ngOnInit() {
    this.employee.getTableData().subscribe((res: any) => {
  
      this.datasource = {
        datasource: res.response,
        displayedColumns: this.displayedColumns,
        actions: this.actions
      }
    });
  }
}
