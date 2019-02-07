import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {StoreModule} from "@ngrx/store";
import {loginReducers} from "./login/redux/login.reducer";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffect} from "./login/redux/login.effect";
import {LoginService} from "./login/login.service";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports : [
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forRoot(loginReducers),
    EffectsModule.forRoot([LoginEffect])
  ],
  exports:[
    RouterModule
  ],
  providers: [
    LoginService
  ]
})
export class StaticRoutingModule {

}
