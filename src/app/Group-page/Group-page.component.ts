import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';

import { MainPageComponent } from '../Main-page/Main-page.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[GroupPage]',
  templateUrl: './Group-page.component.html',
  styleUrls: ['./Group-page.component.css']
})
// tslint:disable-next-line:class-name
export class GroupPageComponent {

  title = '選擇創建群組或搜尋群組';

  CreateGroup = {
    CGP_Name: '',
    CGP_ID: '',
    CGP_PSW: ''
  };

  SearchGroup = {
    SGP_ID: '',
    SGP_PSW: ''
  };
  // tslint:disable-next-line:variable-name
  constructor(private _navigator: OnsNavigator) {}

  CreateGP() {
    this._navigator.element.pushPage(MainPageComponent, {data: {hoge: 'Create'}});
  }
  SearchGP() {
    this._navigator.element.pushPage(MainPageComponent, {data: {hoge: 'Search'}});
  }
}
