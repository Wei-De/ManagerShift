import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { FormGroup, FormControl } from '@angular/forms';


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
    USER_PSW: ''
  };

  ngOnInit() {
    // this.RgtPageForm = new FormGroup({
    //   USER_Name: new FormControl(''),
    //   USER_ID: new FormControl(''),
    //   // USER_BD: new FormControl(''),
    //   USER_SEX: new FormControl(''),
    //   USER_PSW: new FormControl('')
    // });
  }

  // tslint:disable-next-line:variable-name
  constructor(private _navigator: OnsNavigator, private _params: Params) {
    console.log('parameters:', _params.data);
  }
  RgtUP() {
    // const formData = this.RgtPageForm.getRawValue();
    // this.RgtData.USER_Name = formData.EVENT_Title;
    // this.RgtData.USER_ID = formData.EVENT_Location;
    // this.RgtData.USER_SEX = formData.EVENT_startTime;
    // this.RgtData.USER_PSW = formData.EVENT_endTime;
    console.log(this.RgtData);
  }
}
