import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { ForbiddenNameValidator } from "./shared/user-name.validator";
import { PasswordValidator } from "./shared/password.validator";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reactive Forms';
  registrationForm! : FormGroup ;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(){

  //   this.registrationForm = this.formBuilder.group({
  //   userName : ['', Validators.required],
  //   email: ['test@gmail.com'],
  //   password: ['test'],
  //   confirmPassword: ['test'],
  //   address : this.formBuilder.group({
  //       city: ['Nagpur'],
  //       state : ['Maharashtra'],
  //       country: ['']
  //     })


  this.registrationForm = new FormGroup({
    userName: new FormControl('',[Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]),
    email: new FormControl(''),
    subscribe : new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address : new FormGroup({
      city: new FormControl('Nagpur'),
      state : new FormControl(''),
      country: new FormControl('')
    })   

  }, {validators : PasswordValidator});

  this.registrationForm.get('subscribe')?.valueChanges
              .subscribe(checkedValue => {
                  const email = this.registrationForm.get('email');
                  if(email!=null){
                    if(checkedValue){
                      email.setValidators(Validators.required);
                    }else{
                      email.clearValidators();
                    }
  
                    email.updateValueAndValidity();
                  }
                  
              })


}

  

  get f() {
    return this.registrationForm.controls;
  }

  onLoadApiData(){
    this.registrationForm.setValue({
      userName: 'Gautam',
      email: 'test@gmail.com',
      password: 'test',
      confirmPassword : 'test',
      address : {
        city: 'Nagpur',
        state : '',
        country: 'India'
      }
    })

    //OR 
    // this.registrationForm.patchValue({
    //   userName: 'Gautam',
    //  email: 'test@gmail.com',
    //  password: 'test',
     
    // })
  }

}
