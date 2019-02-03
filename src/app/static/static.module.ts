import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login/login.component";
import {StaticRoutingModule} from "./static-routing.module";
import {RegisterComponent} from "./login/register/register.component";
import {StoreModule} from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {loginReducers} from './login/redux/login.reducer';
import {GenericModule} from "../generic/generic.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    StaticRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GenericModule,
    StoreModule.forRoot(loginReducers)
  ],
  declarations: [
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    NavbarComponent,
    LoginComponent
  ]
})
export class StaticModule {
}
