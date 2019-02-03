import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  userIdControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  loginForm = new FormGroup({
    userId: this.userIdControl,
    password: this.passwordControl,
  });

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
