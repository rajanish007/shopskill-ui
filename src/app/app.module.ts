import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GenericModule} from "./generic/generic.module";
import {StaticModule} from "./static/static.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericModule,
    StaticModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
