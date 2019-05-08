import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[RgtPage]',
  templateUrl: './Rgt-page.component.html',
  styleUrls: ['./Rgt-page.component.css']
})
export class RgtPageComponent {

  title = '註冊';

  sex: string[] = ['男', '女'];
  RgtPageForm: FormGroup;

  // tslint:disable-next-line:variable-name
  constructor(private _navigator: OnsNavigator, private _params: Params) {
    console.log('parameters:', _params.data);
    this.RgtPageForm = new FormGroup({
      USER_Name: new FormControl(''),
      USER_ID: new FormControl(''),
      USER_BD: new FormControl(''),
      USER_SEX: new FormControl(''),
      USER_PSW: new FormControl('')
    });
  }
}
