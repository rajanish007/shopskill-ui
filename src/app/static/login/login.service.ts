import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  constructor(private _http: HttpClient) {
  }

  login(payload): Observable<any> {
    let url = "/user/login";
    return this._http.post(url, payload);
  }

}
