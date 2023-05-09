import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { HeaderService } from './shared/services/header.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp2023';
  apiUrl=environment.app_url;
  constructor(
    private authservice :AuthService,
    private headerservice :HeaderService,
  ){}
  ngOnInit() {
    this.authservice.getMessage();
    this.headerservice.setHeaders(this.apiUrl + 'v1/login', 'content-type', 'application/json');
  }
}
