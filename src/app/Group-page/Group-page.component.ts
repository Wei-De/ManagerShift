import { Component, ViewChild, Input, Output, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';
import * as ons from 'onsenui';

import { MainPageComponent } from '../Main-page/Main-page.component';
import { logInPageComponent } from '../logIn-page/logIn-page.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[GroupPage]',
  templateUrl: './Group-page.component.html',
  styleUrls: ['./Group-page.component.css']
})
// tslint:disable-next-line:class-name
export class GroupPageComponent implements OnInit {

  // @ViewChild('abc')data: logInPageComponent;
  title = '選擇創建群組或搜尋群組';

  // a = this.data.login.USER_ID;

  CreateGroup = {
    CGP_Name: '',
    CGP_ID: '',
    CGP_PSW: ''
  };

  SearchGroup = {
    SGP_ID: '',
    SGP_PSW: ''
  };
  loading = false;
  loginData: any = {
    currentUser: {},
    isLogin: false
  };
  // tslint:disable-next-line:variable-name
  constructor(private _navigator: OnsNavigator) {}

  ngOnInit() {}
  // 登出
  logout() {
    this.loginData.currentUser = {};
    this.loginData.isLogin = false;
    localStorage.setItem('loginData', JSON.stringify(this.loginData));

    ons.notification
    .confirm({
        title: '人員登出',
        message: '確定要登出嗎？',
        cancelable: true,
        callback: i => {
          if (i === 1) {
            ons.notification.alert({title: '人員登出', message: '登出成功'});
            this.loading = true;
            this._navigator.element.popPage();
          }
        }
      });
  }
  CreateGP() {
    this._navigator.element.pushPage(MainPageComponent, {data: {hoge: 'Create'}});
  }
  SearchGP() {
    this._navigator.element.pushPage(MainPageComponent, {data: {hoge: 'Search'}});
  }
}
