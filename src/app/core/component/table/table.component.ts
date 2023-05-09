import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data!: any
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  element!: any[];
  dataSource: any
  displayed_columns!: any[];
  columns!: any[];
  date = new Date();
  loader = true;
  employee_detail!: FormGroup;
  update = false;
  mode: any;
  id: any;
  actions!: any[];
  constructor(
    private dialog: DialogService,
    private employee: EmployeeService,
    private activate: ActivatedRoute
  ) { }
  ngOnInit() {

    setTimeout(() => {
      console.log("table");
      this.actions = this.data.actions
      this.element = this.data.datasource;
      this.columns = this.data.Columns;
      this.displayed_columns = this.columns.map(column => column.columnDef);
      // console.log("this.displayed_columns", this.displayed_columns);
      // console.log("this.data.datasource", this.data.datasource);
      this.dataSource = new MatTableDataSource(this.element);
      this.loader = false;
    }, 1000)
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, 1000)
  }

  // filter function================================================
  applyFilter(event: Event) {
    console.log((event.target));
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}



