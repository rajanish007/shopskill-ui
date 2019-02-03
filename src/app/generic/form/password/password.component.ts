import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";


@Component({
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  selector: 'app-password'
})
export class PasswordComponent {

  @Input() placeholder: string;

  @Input() controlName: FormControl;

  @Input() required: boolean = true;

  constructor() {
  }

}
