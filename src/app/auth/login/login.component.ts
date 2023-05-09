
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Login_detail!: FormGroup;
  error!: boolean;
  constructor(private router: Router,
    private employee: EmployeeService,
    private authservice: AuthService) { }
  ngOnInit(): void {
    this.Login_detail = new FormGroup({
      email: new FormControl(null, Validators.required,),
      password: new FormControl(null, Validators.required,),
    })
  }
  // token = 'retyuiodxcvbn6789o0p';

  // signin() {
  //   console.log("this.Login_detail.value", this.Login_detail.value);

  //   this.employee.Login(this.Login_detail.value).subscribe((res) => {
  //     console.log(res.token);
  //     if (res) {
  //       sessionStorage.setItem('currentUserToken', res.token);
  //       this.router.navigate(['/nav/home']);
  //     }
  //   });
  // }

  signin() {
    console.log('formvalues', this.Login_detail)
    if (this.Login_detail.valid) {
      //old code
      // if (this.username == this.signinform.value.email && this.password == this.signinform.value.password) {
      //   sessionStorage.setItem('Currentuser', JSON.stringify({ token: this.token }))
      //   this.router.navigateByUrl('/app/home');
      // }

      this.authservice.signIn(this.Login_detail.value).subscribe((response: any) => {
        if (response && response['user']) {
          console.log('response :', response);
          this.router.navigate(['/nav/home']);
        }
      }, (err) => {
        if (err.error && err.error.error)
          this.error = true;
      })
    }
  }

}
