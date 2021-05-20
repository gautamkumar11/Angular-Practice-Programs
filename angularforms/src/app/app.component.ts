import { Component } from '@angular/core';
import { User } from './user';
import  { EnrollmentService } from './enrollment.service';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Angular Forms';
  submitted! : boolean;
  topics = ['react', 'angular'];
  userModel = new User('Gautam Kumar', 'kumargautam11gk@gmail.com',1234567890,'default','gautam');
  errorMsg : string = '';

  topicHasError: boolean = true;
  onValidateTopic(value : string) {
      if(value === 'default'){
        this.topicHasError = true;
      }else {
        this.topicHasError = false;
      }
  }
  constructor(private _enrollmentService : EnrollmentService){}
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.Enroll(this.userModel).subscribe(
                data => console.log('success ! : ',data),
                error => this.errorMsg = error.statusText   
    )
   // console.log(this.userModel);
  }
}
