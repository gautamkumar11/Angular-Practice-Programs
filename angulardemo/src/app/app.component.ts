import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo ';

  logo = '../assets/stslogo.jpg';

  choice = false;

  show()
  {
    alert('Button Clicked');
    this.choice = true;
  }
}
