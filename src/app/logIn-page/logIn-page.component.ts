import { Component, Injector, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';
import { RgtPageComponent } from '../Rgt-page/Rgt-page.component';
import { MainPageComponent } from '../Main-page/Main-page.component';
import { GroupPageComponent } from '../Group-page/Group-page.component';
import * as ons from 'onsenui';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[logInPage]',
  templateUrl: './logIn-page.component.html',
  styleUrls: ['./logIn-page.component.css']
})

// tslint:disable-next-line:class-name
export class logInPageComponent implements OnInit {

  title = 'LogIn';

    // 登入
    login = {
      USER_ID: '',
      USER_PSW: ''
    };
    loading = false;
    loginData: any = {
      currentUser: {},
      isLogin: false
    };
    data = this.login;

    ngOnInit() {
      if (localStorage.getItem('loginData')) {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
      } else {
        this.loginData.currentUser = {};
        this.loginData.isLogin = false;
        localStorage.setItem('loginData', JSON.stringify(this.loginData));
      }
      console.log(this.data);
    }
    // tslint:disable-next-line:variable-name
    constructor(private _navigator: OnsNavigator, private inj: Injector) {}

    // 登入
    loginOp() {
      if (this.login.USER_ID.length === 0 || this.login.USER_PSW.length === 0) {
        ons.notification.alert({
          title: '警告',
          message: '請輸入帳號密碼！',
          buttonLabel: '確定'
        });
      } else {
        this.loading = true;
        this._navigator.element.pushPage(GroupPageComponent, {data: {hoge: 'GP'}});
        console.log(this.login);
      }
    }
    // 註冊
    RgtOp() {
      this._navigator.element.pushPage(RgtPageComponent, {data: {hoge: 'rgt'}});
    }
}
