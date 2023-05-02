import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoutingService } from './routing.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private routing: RoutingService
  ) { }

  ngOnInit() { }

  getDesignation() {
    console.log("getDesignation");
    return this.routing.get('getDesignation');
  };
  getRole() {
    return this.routing.get('getRole');
  };
  getTableData() {

    return this.routing.get('getEmployees');
  };

}
