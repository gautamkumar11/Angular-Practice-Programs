import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    LoginComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    LoginComponent, 
    DetailsComponent
  ]
})
export class UsersModule { }
