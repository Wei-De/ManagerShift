import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';
import { MainPageComponent } from '../Main-page/Main-page.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[MemberPage]',
  templateUrl: './Member-page.component.html',
  styleUrls: ['./Member-page.component.css']
})

// tslint:disable-next-line:class-name
export class MemberPageComponent {

    // tslint:disable-next-line:variable-name
    constructor(private _navigator: OnsNavigator) {}
}
