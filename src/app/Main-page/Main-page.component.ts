import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';
// Component
import { MemberPageComponent } from '../Member-page/Member-page.component';
import { CalendarPageComponent } from '../Calendar-page/Calendar-page.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[MainPage]',
  templateUrl: './Main-page.component.html',
  styleUrls: ['./Main-page.component.css']
})

// tslint:disable-next-line:class-name
export class MainPageComponent {

  memeber = MemberPageComponent;
  calendar = CalendarPageComponent;

    // tslint:disable-next-line:variable-name
    constructor(private _navigator: OnsNavigator) {}
}
