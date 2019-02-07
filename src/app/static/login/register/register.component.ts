import {Component, OnChanges, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor() {
  }

  passwordMatchFlag: boolean;

  usernameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20)
  ]);
  emailControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(14)
  ]);
  passwordMatchControl = new FormControl('', Validators.required);
  registerForm = new FormGroup({
    userId: this.usernameControl,
    email: this.emailControl,
    password: this.passwordControl,
    passwordMatch: this.passwordMatchControl
  });

  ngOnInit() {
    console.log()
  }

  register() {
    this.passwordMatchFlag = this.registerForm.controls['password'] != this.registerForm.controls['passwordMatch'];
  }

}
