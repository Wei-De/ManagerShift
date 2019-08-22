import { Component, Injector, OnInit, Input, Output, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';
import { RgtPageComponent } from '../Rgt-page/Rgt-page.component';
import { MainPageComponent } from '../Main-page/Main-page.component';
import { GroupPageComponent } from '../Group-page/Group-page.component';
import * as ons from 'onsenui';
import { WebAPIService } from '../web-Service/web.api.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[logInPage]',
  templateUrl: './logIn-page.component.html',
  styleUrls: ['./logIn-page.component.css']
})

// tslint:disable-next-line:class-name
export class logInPageComponent implements OnInit {

  title = '登入';

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


    ngOnInit() {
      if (localStorage.getItem('loginData')) {
        this.loginData = JSON.parse(localStorage.getItem('loginData'));
      } else {
        this.loginData.currentUser = {};
        this.loginData.isLogin = false;
        localStorage.setItem('loginData', JSON.stringify(this.loginData));
      }
    }
    // tslint:disable-next-line:variable-name
    constructor(private _navigator: OnsNavigator, private inj: Injector, private webApiService: WebAPIService) {}

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
        // this.webApiService.CheckUserIdPwd(this.login).subscribe(res => {
        //   const loginData: any = {};
        //   this.loading = false;
        //   if (res.checkStatus === 'OK') {
        //     loginData.currentUser = res;
        //     loginData.currentUser.USER_ID = this.login.USER_ID;
        //     loginData.isLogin = true;
        //     localStorage.setItem('loginData', JSON.stringify(loginData));

        //     ons.notification
        //       .alert({
        //         title: '人員登入',
        //         message: '登入成功：' + loginData.currentUser.userName + '您好！',
        //         buttonLabel: '確定'
        //       })
              // .then(this._navigator.element.pushPage(GroupPageComponent, {data: this.login}));
        //   } else {
        //     ons.notification.alert({
        //       title: '人員登入',
        //       message: '登入失敗！',
        //       buttonLabel: '確定'
        //     });
        //   }
        // });
        this._navigator.element.pushPage(GroupPageComponent, {data: this.login});
      }
    }
    // 註冊
    RgtOp() {
      this._navigator.element.pushPage(RgtPageComponent, {data: {hoge: 'rgt'}});
    }
}
