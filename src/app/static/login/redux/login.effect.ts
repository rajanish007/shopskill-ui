import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {LoginService} from "../login.service";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";

import * as loginActions from '../redux/login.action';
import {LoginAction, LoginFailedAction, LoginSuccessAction} from '../redux/login.action';
import {catchError, map, mergeMap} from "rxjs/operators";

@Injectable()
export class LoginEffect {

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(loginActions.Login),
    mergeMap((data: LoginAction) =>
      this.loginService.login(data.payload).pipe(
        map(data => new LoginSuccessAction(data)),
        catchError(error => of(new LoginFailedAction(error)))
      )
    )
  );

  constructor(
    private loginService: LoginService,
    private actions$: Actions
  ) {
  }
}
