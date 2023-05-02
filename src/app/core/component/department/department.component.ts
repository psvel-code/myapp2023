import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent {
  datasource: any;
  actions = ["edit", "delete"]
  displayedColumns: string[] = ['id', 'name', 'modified', 'Action'];
  constructor(private employee: EmployeeService) { }
  ngOnInit() {

    this.employee.getDesignation().subscribe((res: any) => {
      console.log('table data', res.designation);
      this.datasource = {
        datasource: res.designation,
        displayedColumns: this.displayedColumns,
        actions: this.actions
      }
    });
  }
}
