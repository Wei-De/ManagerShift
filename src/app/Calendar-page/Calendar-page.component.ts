import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, NavController, ModalController,Platform } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
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
  remind =  {
    startDate:'',
    alarmTime:''    
  };
  
  time1:any;
  time2:any;
  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
    
  constructor(private alertCtrl: AlertController,
              public navCtrl: NavController,
              private modalCtrl: ModalController,
              private localNotifications: LocalNotifications,
              private plt:Platform,
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
    //     console.log(TWholiday.startTime);
    //   }
    //   this.myCal.loadEvents();
    // });
  }
  // let time = this.alarm.alarmTime.split(':');
  //   let alarmtime = new Date(alarm.startDate);
  //   let notification: any = {
  localnotificationHandler(remind){    
    let time = this.remind.alarmTime.split(/T|:|,/);     
    this.time1 =time[1];
    this.time2 =time[2];     
    let alarmtime = new Date(this.event.startTime);
    let notification: any = {
        id:0,
        text: '測試鬧鈴',
        at: new Date(alarmtime.getFullYear(), alarmtime.getMonth(), alarmtime.getDate(),this.time1,this.time2),
        led: 'FF0000',
     }
     this.localNotifications.schedule (notification);
     this.localNotifications.isScheduled (0);
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
  changeMode(mode) {
    this.calendar.mode = mode;
  }

  // // Focus today
  // today() {
  //   this.calendar.currentDate = new Date();
  // }

  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    // const start = formatDate(event.startTime, 'medium', this.locale);
    // const end = formatDate(event.endTime, 'medium', this.locale);
    const start = formatDate(event.startTime, 'yyyy/MM/dd HH:mm', this.locale);
    const end = formatDate(event.endTime, 'yyyy/MM/dd HH:mm', this.locale);

    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.location,
      message: start + '-' + end,
      buttons: ['OK']
    });
    alert.present();
    console.log('11');
  }

  // Time slot was clicked
  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
  }  
}
