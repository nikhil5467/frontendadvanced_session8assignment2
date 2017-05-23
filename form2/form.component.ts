import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import { ControlMessageComponent } from '../validationControlMessage/validationControlMessage.component';
import { getValidatorErrorMessage } from '../validationControlMessage/validationControlMessage.service';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives: [ControlMessageComponent]
})
export class AppComponent {
  userForm: any;
  
  constructor(
    private _formBuilder: FormBuilder) {
      
    this.userForm = this._formBuilder.group({
        'name': ['', Validators.required],
		'username': ['', Validators.required],
		'mobile': ['', Validators.required],
		'password': ['', Validators.required],
        'email': ['', Validators.compose([Validators.required, getValidatorErrorMessage.emailValidator])]
    });
  }
  
  saveUser() {
    if (this.userForm.dirty && this.userForm.valid) {
      alert(`Name: ${this.userForm.value.name} Email: ${this.userForm.value.email}`);
    }
  }
}