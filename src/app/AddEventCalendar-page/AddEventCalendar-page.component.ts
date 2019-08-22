import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID, Output, Input } from '@angular/core';
import { AlertController, NavController, ModalController, Events } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { OnsNavigator, Params } from 'ngx-onsenui';


import { CalendarPageComponent } from '../Calendar-page/Calendar-page.component';
import * as ons from 'onsenui';
import { CalendarData } from '../model/CalendarData';
import { MainPageComponent } from '../Main-page/Main-page.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[AddEventPage]',
  templateUrl: './AddEventCalendar-page.component.html',
  styleUrls: ['./AddEventCalendar-page.component.css']
})
export class AddEventPageComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _navigator: OnsNavigator, private _params: Params, @Inject(LOCALE_ID) private locale: string) {}
  event: CalendarData = new CalendarData();
  minDate = new Date().toISOString();
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  eventTitle = '';
  AddorEdit = '';

  ngOnInit() {
    console.log(this._params.data.title);
    if (this._params.data.title === undefined) {
      this.eventTitle = '新增事件';
      this.AddorEdit = '新增';
    } else {
      this.eventTitle = '編輯事件';
      this.AddorEdit = '編輯';
    }
    console.log(this._params.data.hoge);
    if (this._params.data.hoge === 'add') {
      console.log('123');
    } else {
      this.event = this._params.data;
      this.event.startTime = formatDate(this._params.data.startTime, 'yyyy/MM/dd HH:mm', this.locale);
      this.event.endTime = formatDate(this._params.data.endTime, 'yyyy/MM/dd HH:mm', this.locale);
    }

    console.log(this.event);
  }

  // 新增事件
  addEvent() {
    if (this.event.title !== '' && this.event.startTime !== '' && this.event.endTime !== '') {
      this._navigator.element.pushPage(MainPageComponent, {data: this.event});
    } else {
      ons.notification.alert('請輸入完整！');
    }
    // this.myCal.loadEvents();
    console.log(this.event);
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
