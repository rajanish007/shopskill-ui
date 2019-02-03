import {Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  templateUrl: './identifier.component.html',
  styleUrls: ['./identifier.component.css'],
  selector: 'app-identifier'
})
export class IdentifierComponent {

  @Input() placeholder: string;

  @Input() controlName: FormControl;

  @Input() required: boolean = true;

  constructor() {
  }
}
