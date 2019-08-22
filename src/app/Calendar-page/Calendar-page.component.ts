import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID, Input } from '@angular/core';
import { AlertController, NavController, ModalController, Events } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { OnsNavigator, Params } from 'ngx-onsenui';

import { WebAPIService } from '../web-Service/web.api.service';

import { MainPageComponent } from '../Main-page/Main-page.component';
import { CalendarData } from '../model/CalendarData';
import { AddEventPageComponent } from '../AddEventCalendar-page/AddEventCalendar-page.component';
import { eventTextPageComponent } from '../eventText-page/eventText-page.component';
import * as ons from 'onsenui';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[CalendarPage]',
  templateUrl: './Calendar-page.component.html',
  styleUrls: ['./Calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {
  // event = {
  //   title: '',
  //   desc: '',
  //   startTime: '',
  //   endTime: '',
  //   allDay: false
  // };

  event: CalendarData = new CalendarData();

  isToday: boolean;
  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle: any;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController,
              public navCtrl: NavController,
              // tslint:disable-next-line:variable-name
              private _navigator: OnsNavigator,
              @Inject(LOCALE_ID) private locale: string,
              private calendarService: WebAPIService,
              // tslint:disable-next-line: variable-name
              private _params: Params) {}
  eventCopy = {
    title: this._params.data.title,
    startTime:  new Date(this._params.data.startTime),
    endTime: new Date(this._params.data.endTime),
    desc: this._params.data.desc
  };
  ngOnInit() {
    this.eventSource.push(this.eventCopy);
    // this.myCal.loadEvents();
    console.log(this.eventCopy);
    // this.resetEvent();
    // const eventbody = {
    //   end: {
    //     dateTime: '2019-05-31T21:00:00+08:00'
    //   },
    //   start: {
    //     dateTime: '2019-05-31T17:00:00+08:00'
    //   },
    //   summary: 'Test1',
    //   location: 'Taipei'
    // };

    // // insert event
    // this.calendarService.eventInsert(eventbody).subscribe(res => {
    //   const addevent = [];
    //   // 把res放進陣列
    //   addevent.push(res);
    //   const eventCopy = {
    //     title: addevent[0].summary,
    //     startTime:  new Date(addevent[0].start.dateTime),
    //     endTime: new Date(addevent[0].end.dateTime),
    //     location: addevent[0].location
    //   };
    //   // 把事件放進行事曆
    //   this.eventSource.push(eventCopy);
    //   this.myCal.loadEvents();
    // });

      // get event
    // this.calendarService.GetEvent().subscribe(res2 => {
    //   const getholidays = [];
    //   getholidays.push(res2.items);
    //   for (let i = 0; i < 74; i++) {
    //     const TWholiday = {
    //       title: getholidays[0][i].summary,
    //       startTime: new Date(getholidays[0][i].start.date),
    //       endTime: new Date(getholidays[0][i].end.date)
    //     };
    //     const start = TWholiday.startTime;
    //     const end = TWholiday.endTime;
    //     TWholiday.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
    //     TWholiday.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() - 1));
    //     this.eventSource.push(TWholiday);
    //     // console.log(this.eventSource);
    //   }
    //   this.myCal.loadEvents();
    // });
  }
  change() {
    this.eventSource[0].startTime = formatDate(this.eventCopy.startTime, 'yyyy/MM/dd HH:mm', this.locale);
    this.eventSource[0].endTime = formatDate(this.eventCopy.endTime, 'yyyy/MM/dd HH:mm', this.locale);
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }
  // show new dialog
  onAddEvent() {
    this._navigator.element.pushPage(AddEventPageComponent, {data: {hoge: 'add'}});
  }
  // Change current month/week/day
 next() {
  // tslint:disable-next-line:no-string-literal
  const swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}

  back() {
    // tslint:disable-next-line:no-string-literal
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }

  // Change between month/week/day
  changeMode(mode: string) {
    this.calendar.mode = mode;
  }

  // // Focus today
  // today() {
  //   this.calendar.currentDate = new Date();
  // }

  // Selected date reange and hence title changed
  onViewTitleChanged(title: any) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event: { startTime: string | number | Date; endTime: string | number | Date; title: string; location: string; }) {

    this._navigator.element.pushPage(eventTextPageComponent, {data: event});
    // const title = this.eventSource[0].title;
    // const start = formatDate(event.startTime, 'yyyy/MM/dd HH:mm', this.locale);
    // const end = formatDate(event.endTime, 'yyyy/MM/dd HH:mm', this.locale);
    // const alert = await this.alertCtrl.create({
    //   header: event.title,
    //   subHeader: event.location,
    //   message: start + '-' + end,
    //   buttons: ['編輯', '刪除']
    // });
  //   for (let i = 0; i < 2; i++) {
  //   if (alert.buttons[i].valueOf() === '編輯') {
  //     console.log(alert.buttons[1].valueOf());
  //     this.onEditEvent();
  //   } else {
  //     this.onDeleteEvent();
  //   }
  // }
    // alert.present();
  }

  // Edit event
  onEditEvent() {
    this.change();
    this._navigator.element.pushPage(AddEventPageComponent, {data: this.eventCopy});
  }
  // Delete event
  onDeleteEvent() {
    // this.eventSource = this.eventSource.filter(
    //   x => !(x.title === index.title && x.desc === index.desc)
    // );
    // this.eventSource.forEach(eventSourceData => {
    //   if (eventSourceData.startTime === index.startTime) {
    //     eventSourceData.index.forEach(y => {
    //       if (y.title === index.title) {
    //         const eventDataList = y.Data.filter(
    //           eventData =>
    //             !(
    //               eventData.title === index.title &&
    //               eventData.desc === index.desc
    //             )
    //         );
    //         y.Data = eventDataList;
    //       }
    //     });
    //   }
    // });
    // localStorage.setItem(
    //   'deliveryDataList',
    //   JSON.stringify(this.deliveryDataList)
    // );
  }

  // Time slot was clicked
  onTimeSelected(ev: { selectedTime: string | number | Date; }) {
    const selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());

    // tslint:disable-next-line:no-angle-bracket-type-assertion
    // const dialog = (<HTMLElement> document.getElementById('dialog'));
    // dialog.show();
    // console.log(selected);
  }
}
