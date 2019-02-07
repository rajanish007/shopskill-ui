import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Login} from "./redux/login.action";

import * as fromRoot from './redux';
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {
  }

  userIdControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  loginForm = new FormGroup({
    loginId: this.userIdControl,
    password: this.passwordControl,
  });

  ngOnInit() {
    this.loginForm.reset();
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.store.dispatch({type: Login, payload: this.loginForm.value});
  }

}
