import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {BrowserModule} from "@angular/platform-browser";
import {LoginComponent} from "./login/login.component";
import {Routes} from "@angular/router";
import {StaticRoutingModule} from "./static-routing.module";
import {RegisterComponent} from "./login/register/register.component";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    StaticRoutingModule
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
