import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css']
  styles : [`
    h1{
      color : blue;
      text-align : center;
      background-color: rgb(209, 173, 173);;
    }
  `]
})
export class AppComponent {
  title = 'Aangularproject';
  name = '';
}
