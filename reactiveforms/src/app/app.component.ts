import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive Forms';

  constructor(private formBuilder : FormBuilder){}

  registrationForm = this.formBuilder.group({
    userName : ['', Validators.required],
    email: ['test@gmail.com'],
    password: ['test'],
    address : this.formBuilder.group({
        city: ['Nagpur'],
        state : ['Maharashtra'],
        country: ['']
      })


  // registrationForm = new FormGroup({
  //    userName: new FormControl('Gautam'),
  //    email: new FormControl(''),
  //    password: new FormControl(''),
  //    address : new FormGroup({
  //      city: new FormControl('Nagpur'),
  //      state : new FormControl(''),
  //      country: new FormControl('')
  //    })   
  });

  onLoadApiData(){
    this.registrationForm.setValue({
      userName: 'Gautam',
      email: 'test@gmail.com',
      password: 'test',
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
