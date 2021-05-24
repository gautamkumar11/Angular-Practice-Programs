import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { ForbiddenNameValidator } from "./shared/user-name.validator";
import { PasswordValidator } from "./shared/password.validator";
import { RegistrationService } from './registration.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reactive Forms';
  registrationForm! : FormGroup ;

  constructor(private formBuilder : FormBuilder, private _registrationService : RegistrationService){}

  ngOnInit(){

    this.registrationForm = this.formBuilder.group({
      userName : ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]],
      email: [''],
      subscribe : [''],
      phone: [''],
      password: ['test'],
      confirmPassword: ['test'],
      address : this.formBuilder.group({
           city: ['Nagpur'],
           state : ['Maharashtra'],
           country: ['']
         }),
      alternatePhones: this.formBuilder.array([])
     }, {validators : PasswordValidator});
    

    // this.registrationForm = new FormGroup({
    //   userName: new FormControl('',[Validators.required, Validators.minLength(3), ForbiddenNameValidator(/admin/)]),
    //   email: new FormControl(''),
    //   subscribe : new FormControl(''),
    //   phone : new FormControl(''),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    //   address : new FormGroup({
    //     city: new FormControl('Nagpur'),
    //     state : new FormControl(''),
    //     country: new FormControl('')
    //   }),
    //   alternatePhones : new FormArray([]) 

    // }, {validators : PasswordValidator});

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
  get alternatePhones(){
    return (this.registrationForm.get('alternatePhones')) as FormArray ;
  }

  addAlternatePhones(){
    this.alternatePhones.push(this.formBuilder.control(''));
  }
  
  get f() {
    return this.registrationForm.controls;
  }

  onLoadApiData(){
    this.registrationForm.patchValue({
      userName: 'Gautam',
      email: 'test@gmail.com',
      phone: 45127896,
      password: 'test',
      confirmPassword : 'test',
      address : {
        city: 'Nagpur',
        state : '',
        country: 'India'
      },
    })

    //OR 
    // this.registrationForm.setValue({
    //   need to write all form control /properties/ fields    
    // })
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
                    .subscribe(
                      response => {console.log("Suscess ! : ", response)},
                      error => {console.error("Error! : ",error)}
                      );
  }

}
