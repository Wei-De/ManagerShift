import { Component, ViewChild } from '@angular/core';
import * as ons from 'onsenui';
import { OnsNavigator } from 'ngx-onsenui';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}
  @ViewChild('navi') navi: OnsNavigator;

  title = 'LogIn';

  EntryPage(page: any) {}
}
