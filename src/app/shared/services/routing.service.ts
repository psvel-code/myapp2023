import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  app_url = environment.app_url;

  constructor(private http: HttpClient) { }

  //backend call============================================================
  get(url: any) {
    return this.http.get(this.app_url + url);
  };

  post(url: any, data: any) {
    return this.http.post(this.app_url + url, data);
  };
}
