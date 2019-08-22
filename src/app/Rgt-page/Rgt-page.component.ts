import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator, Params } from 'ngx-onsenui';
import * as ons from 'onsenui';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[RgtPage]',
  templateUrl: './Rgt-page.component.html',
  styleUrls: ['./Rgt-page.component.css']
})
export class RgtPageComponent implements OnInit {

  title = '註冊';

  sex: string[] = ['男', '女'];

  RgtData = {
    USER_Name: '',
    USER_ID: '',
    USER_SEX: '',
    USER_EMAIL: '',
    USER_PSW: ''
  };

  ngOnInit() {

  }

  // tslint:disable-next-line:variable-name
  constructor(private _navigator: OnsNavigator, private _params: Params) {
    console.log('parameters:', _params.data);
  }
  RgtUP() {
    console.log(this.RgtData);
    if (this.RgtData.USER_Name.length !== 0 || this.RgtData.USER_ID.length !== 0 || this.RgtData.USER_SEX.length !== 0 ||
        this.RgtData.USER_EMAIL.length !== 0 || this.RgtData.USER_PSW.length !== 0) {
          ons.notification.alert({
            title: '人員註冊',
            message: '註冊成功',
            buttonLabel: '確定'
          })
          .then(this._navigator.element.popPage());
        } else {
          ons.notification.alert({
            title: '警告',
            message: '請完整填寫',
            buttonLabel: '確定'
          });
        }
  }
}
