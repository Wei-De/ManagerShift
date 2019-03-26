import { Component } from '@angular/core';
import * as ons from 'onsenui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'managershift';

  alert() {
    ons.notification.alert('Hello, world!');
  }
}
