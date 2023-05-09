import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HeaderService } from '../shared/services/header.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private router: Router,
    private authservice: AuthService,
    private headerService: HeaderService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if (this.authservice.isAuthenticate()) {
      const token = this.authservice.getToken();
      if (token) {
        this.headerService.setHeaders('default', 'Authorization', token);
        console.log('token', token);
      }
      return true
    }
    else {
      this.router.navigate(["/signin"])
      return false
    }
  }

}
