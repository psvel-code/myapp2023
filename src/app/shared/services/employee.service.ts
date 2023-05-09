import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoutingService } from './routing.service';
import { catchError, map, throwError } from 'rxjs';

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

  Login(data: any) {
    return this.routing.post('login', data).pipe(map((res: any) => {
      if (res && res['user'] && res['token']) {
        // this.user.next(res['user']);
        console.log("token", data.token);
        sessionStorage.setItem('currentUserToken', data.token)
      }
      return res;
    }), catchError(err => {
      return throwError(err)
    }));

  }
}
