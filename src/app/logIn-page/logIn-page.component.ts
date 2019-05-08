import { Component, Injector } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';
import { RgtPageComponent } from '../Rgt-page/Rgt-page.component';
import { MainPageComponent } from '../Main-page/Main-page.component';
import * as ons from 'onsenui';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[logInPage]',
  templateUrl: './logIn-page.component.html',
  styleUrls: ['./logIn-page.component.css']
})

// tslint:disable-next-line:class-name
export class logInPageComponent {

  title = 'LogIn';

    // 登入
    login = {
      USER_ID: '',
      USER_PSW: ''
    };

    // tslint:disable-next-line:variable-name
    constructor(private _navigator: OnsNavigator, private inj: Injector) {}

    // 登入
    loginOp() {
      // if (this.login.USER_ID.length === 0 || this.login.USER_PSW.length === 0) {
      //   ons.notification.alert({
      //     title: '警告',
      //     message: '請輸入帳號密碼！',
      //     buttonLabel: '確定'
      //   });
      // } else {
        this._navigator.element.pushPage(MainPageComponent, {data: {hoge: 'main'}});
      // }
    }
    // 註冊
    RgtOp() {
      this._navigator.element.pushPage(RgtPageComponent, {data: {hoge: 'rgt'}});
    }
}
