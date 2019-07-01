import { Component, ViewChild, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';
import { formatDate } from '@angular/common';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController, NavController } from '@ionic/angular';
import { WebService } from '../Calendar-Service/web.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[SchedulePage]',
  templateUrl: './Schedule-page.component.html',
  styleUrls: ['./Schedule-page.component.css']
})
// tslint:disable-next-line:class-name
export class SchedulePageComponent implements OnInit {
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    // allDay: false
  };
  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'week',
    currentDate: new Date(),
  };

  ngOnInit() {
    this.resetEvent();
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
  Layout() {}

  constructor(private alertCtrl: AlertController,
              public navCtrl: NavController,
              // tslint:disable-next-line:variable-name
              private _navigator: OnsNavigator,
              @Inject(LOCALE_ID) private locale: string,
              private calendarService: WebService) {}

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
