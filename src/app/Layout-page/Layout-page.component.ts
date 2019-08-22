import { Component, ViewChild, OnInit, Inject, LOCALE_ID, Input } from '@angular/core';
import { LayoutData } from '../model/LayoutData';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { SchedulePageComponent } from '../Schedule-page/Schedule-page.component';
import * as ons from 'onsenui';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[LayoutPage]',
  templateUrl: './Layout-page.component.html',
  styleUrls: ['./Layout-page.component.css']
})
export class LayoutPageComponent {
  layoutTitle = '安排人力';
  layoutdata: LayoutData = new LayoutData();
  minDate = new Date().toISOString();

  // tslint:disable-next-line:variable-name
  constructor(private _navigator: OnsNavigator, private _params: Params, @Inject(LOCALE_ID) private locale: string) {}

  // 確定
  confirm() {
    if (this.layoutdata.title !== '' && this.layoutdata.startTime !== '' && this.layoutdata.endTime !== '') {
      this._navigator.element.pushPage(SchedulePageComponent, {data: this.layoutdata});
    } else {
      ons.notification.alert('請輸入完整！');
    }
    // this.myCal.loadEvents();
    console.log(this.layoutdata);
    // this.calendar.resetEvent();
  }
   // 取消
   cancel() {
    ons.notification
    .confirm({
        title: '返回',
        message: '確定取消？',
        cancelable: true,
        callback: i => {
          if (i === 1) {
            ons.notification.alert({title: '取消', message: '取消成功'});
            this._navigator.element.popPage();
          }
        }
      });
  }
}
