import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import{ FormsModule }from "@angular/forms";
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
