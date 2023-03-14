import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-reactive-forms',
  templateUrl: './test-reactive-forms.component.html',
  styleUrls: ['./test-reactive-forms.component.css']
})
export class TestReactiveFormsComponent {

  myForm!:FormGroup;
  jForm!:any;

  constructor(){
    this.myForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        userName: new FormControl('', Validators.required),
        password: new FormControl('',[ Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('',Validators.required)
      }
    );

    this.jForm = JSON.stringify(this.myForm.value);

  }

  signU(){

    if(this.myForm.valid){
      console.log(this.myForm.value);
      this.jForm = JSON.stringify(this.myForm.value);
    }

  }

}
