import { Component, ViewChild } from '@angular/core';
import * as ons from 'onsenui';
import { OnsNavigator } from 'ngx-onsenui';
import { logInPageComponent } from './logIn-page/logIn-page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  page = logInPageComponent;
  constructor() {}
}
