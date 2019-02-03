import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {IdentifierComponent} from "./form/identifier/identifier.component";
import {PasswordComponent} from "./form/password/password.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    IdentifierComponent,
    PasswordComponent
  ],
  exports : [
    IdentifierComponent,
    PasswordComponent
  ]
})
export class GenericModule { }
