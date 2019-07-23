import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID, Output, Input } from '@angular/core';
import { AlertController, NavController, ModalController, Events } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { OnsNavigator, Params } from 'ngx-onsenui';


import { CalendarPageComponent } from '../Calendar-page/Calendar-page.component';
import * as ons from 'onsenui';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[AddEventPage]',
  templateUrl: './AddEventCalendar-page.component.html',
  styleUrls: ['./AddEventCalendar-page.component.css']
})
export class AddEventPageComponent {
  // @ViewChild('calendar') calendar: CalendarPageComponent;
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    // allDay: false
  };
  eventSource = [];
  minDate = new Date().toISOString();
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  // tslint:disable-next-line: variable-name
  constructor(private _navigator: OnsNavigator) {}

  // 新增事件
  addEvent(index) {
    // index.forEach(element => {
    //   this.eventSource.push({
    //     title: element.title,
    //     desc: element.desc,
    //     startTime: element.startTime,
    //     endTime: element.endTime
    //   });
    // });
    // this.calendar.resetEvent();
    const eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      desc: this.event.desc
    };

    // 把事件放進行事曆
    this.eventSource.push(eventCopy);
    this._navigator.element.popPage();

    // this.myCal.loadEvents();
    console.log(this.eventSource);
    // this.calendar.resetEvent();
  }
  // 取消
  cancel() {
    ons.notification
    .confirm({
        title: '返回',
        message: '確定取消新增？',
        cancelable: true,
        callback: i => {
          if (i === 1) {
            ons.notification.alert({title: '取消新增', message: '取消成功'});
            this._navigator.element.popPage();
          }
        }
      });
  }
}
