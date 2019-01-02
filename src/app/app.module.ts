import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GenericModule} from "./generic/generic.module";
import {StaticModule} from "./static/static.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GenericModule,
    StaticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
