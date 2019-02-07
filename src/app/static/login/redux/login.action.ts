import {Action} from "@ngrx/store";
import {LoginModel} from "../login.model";

export const Login = '[Login] Login';
export const LoginSuccess = '[Login] Success';
export const LoginFailed = '[Login] Failed';

export class LoginAction implements Action {
  type = Login;

  constructor(public payload: LoginModel) {
  }
}

export class LoginSuccessAction implements Action {
  type = LoginSuccess;

  constructor(public payload: any) {
  }
}

export class LoginFailedAction implements Action {
  type = LoginFailed;

  constructor(public payload: any) {
  }
}
