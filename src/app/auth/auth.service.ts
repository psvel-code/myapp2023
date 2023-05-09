import { Injectable } from '@angular/core';
import { RoutingService } from '../shared/services/routing.service';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<any>(null);
  messages = new BehaviorSubject<any>(null);
  constructor(private http: RoutingService) { }
  getMessage() {
    this.http.getMessages('messages.json').subscribe((res) => {
      this.messages.next(res);
    })
  }
  getRefreshToken() {
    const currentUser = JSON.parse(sessionStorage.getItem('Currentuser') || '');
    const refreshToken = currentUser ? currentUser.refreshToken : null;
    return this.http.post('refreshToken', { refreshToken });
  }

  isAuthenticate(): boolean {
    let token;
    const Currentuser = JSON.parse(String(sessionStorage.getItem('Currentuser')));
    // console.log(Currentuser);
    if (Currentuser && Currentuser.token) {
      token = Currentuser.token;
      return token != null;
    }
    return false
  }

  getToken(): string {
    let token;
    const currentUser = JSON.parse(sessionStorage.getItem('Currentuser') || '');
    console.log("get token currentUser", currentUser);
    if (currentUser) {
      console.log("get token");

      token = currentUser.token;
    }
    return token;
  }

  signIn(data: any) {
    return this.http.post('login', data).pipe(map((res: any) => {
      if (res && res['user'] && res['token']) {
        this.user.next(res['user']);
        sessionStorage.setItem('Currentuser', JSON.stringify({ token: res['token'], refreshToken: res['refreshToken'] }))
      }
      return res;
    }), catchError(err => {
      return throwError(err);
    }));
  }

  OnLogout() {
    sessionStorage.removeItem('Currentuser');
    return true
  }

}
