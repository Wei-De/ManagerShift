import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, NavController, ModalController, Events } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { OnsNavigator, Params } from 'ngx-onsenui';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import { WebService } from '../Calendar-Service/web.service';

import { AppComponent } from '../app.component';
import { MainPageComponent } from '../Main-page/Main-page.component';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[CalendarPage]',
  templateUrl: './Calendar-page.component.html',
  styleUrls: ['./Calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    // allDay: false
  };

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
              private modalCtrl: ModalController,
              // tslint:disable-next-line:variable-name
              private _navigator: OnsNavigator,
              @Inject(LOCALE_ID) private locale: string,
              private calendarService: WebService) {}

  ngOnInit() {
    this.resetEvent();
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
    this.calendarService.GetEvent().subscribe(res2 => {
      const getholidays = [];
      getholidays.push(res2.items);
      for (let i = 0; i < 74; i++) {
        const TWholiday = {
          title: getholidays[0][i].summary,
          startTime: new Date(getholidays[0][i].start.date),
          endTime: new Date(getholidays[0][i].end.date)
        };
        const start = TWholiday.startTime;
        const end = TWholiday.endTime;
        TWholiday.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
        TWholiday.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() - 1));
        this.eventSource.push(TWholiday);
      }
      this.myCal.loadEvents();
    });
  }

  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      // allDay: false
    };
  }
  // show new dialog
  addEventDialog() {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    const dialog = (<HTMLElement> document.getElementById('dialogevent'));
    // dialog.show();
  }

  // Create the right event format and reload source
  addEvent() {
    const eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      desc: this.event.desc
    };

    // 把事件放進行事曆
    this.eventSource.push(eventCopy);

    this.myCal.loadEvents();
    console.log(this.eventSource);
    this.resetEvent();
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

  // Calendar event was clicked(編輯事件)
  async onEventSelected(event: { startTime: string | number | Date; endTime: string | number | Date; title: string; location: string; }) {
    // tslint:disable-next-line:no-angle-bracket-type-assertion
    // const dialog = (<HTMLElement> document.getElementById('dialog'));
    // dialog.show();
    // dialog.hide().subscribe(result => {
    //   this.eventSource = result;
    //   this.eventSource.push(result);

    //   if (result !== 'cancel') {
    //     // tslint:disable-next-line:one-variable-per-declaration
    //     const title = result.title,
    //           desc = result.desc,
    //           startTime = result.startTime,
    //           endTime = result.endTime;
    //     // tslint:disable-next-line:object-literal-key-quotes
    //     result = { 'title': title, 'desc': desc, 'startTime': startTime, 'endTime': endTime };

    //     this.onEditData(result, event);
    //   }
    // });

    const title = this.eventSource[0].title;
    const start = formatDate(event.startTime, 'yyyy/MM/dd HH:mm', this.locale);
    const end = formatDate(event.endTime, 'yyyy/MM/dd HH:mm', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.location,
      message: start + '-' + end,
      buttons: ['OK']
    });
    alert.present();
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
