import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { HeaderService } from "./header.service";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  isRefreshingToken!: boolean;
  /**
   * Constrcutor used to inject the requied services.
   * @param headerservice To get headers from the header service.
   * @param authservice To get the refresh token from the auth service.
   * @param router To navigate to provided route.
    */

  constructor(private headerservice: HeaderService,
    private authservice: AuthService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // And passed the request to the next handler and process the returned response.
    return next.handle(this.setHeaders(request)).pipe(catchError((err) => {
      if (err instanceof HttpErrorResponse && err.status == 401) {
        // If 401 error returned, then we handle it 
        return this.handleError(request, next);
      }
      return throwError(err);
    }));
  }
  /**
   * Method which is used to handle 401 error response.
   * @param request which is used to define the request of the url.
   * @param next which is used to define the request passed for further processsing.
   */
  handleError(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshingToken) {
      this.isRefreshingToken = true;
      this.refreshTokenSubject.next(null);
      return this.authservice.getRefreshToken().pipe(switchMap((token: any) => {
        this.isRefreshingToken = false;
        this.refreshTokenSubject.next(token['accessToken']);
        this.headerservice.setHeaders('default', 'Authorization', token['accessToken']);
        sessionStorage.setItem('token', token['accessToken']);
        return next.handle(this.setHeaders(request));
      }), catchError((err: any) => {
        this.isRefreshingToken = false;
        this.router.navigate(['/signin']);
        return throwError(err);
      }));
    } else {
      // when the new token is ready and we can retry the request again.
      return this.refreshTokenSubject.pipe(filter(token => token !== null),
        take(1), switchMap(jwtToken => next.handle(this.setHeaders(request))));
    }
  }
  setHeaders(request: HttpRequest<any>) {
    console.log('setHeaders intercept', request.url);
    const headers = this.headerservice.getHeaders(request.url);
    return headers ? request.clone({
      setHeaders: headers
    }) : request
  }
}
