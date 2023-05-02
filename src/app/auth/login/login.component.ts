
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Login_detail!: FormGroup;
  constructor(private router: Router,
    private employee: EmployeeService) { }
  ngOnInit(): void {
    this.Login_detail = new FormGroup({
      email: new FormControl(null, Validators.required,),
      password: new FormControl(null, Validators.required,),
    })
  }
  token = 'retyuiodxcvbn6789o0p';
  user = {
    email: 'psvel@gmail.com',
    password: "12345678"
  };
  signin() {

    if (this.Login_detail.get('email')?.value == this.user.email && this.Login_detail.get('email')?.value == this.user.email) {
      this.router.navigate(['/nav/home']);
    }
  }
}
