import { Component, ViewChild, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { formatDate } from '@angular/common';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AlertController, NavController } from '@ionic/angular';
import { WebAPIService } from '../web-Service/web.api.service';
import { LayoutPageComponent } from '../Layout-page/Layout-page.component';
import { LayoutData } from '../model/LayoutData';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[SchedulePage]',
  templateUrl: './Schedule-page.component.html',
  styleUrls: ['./Schedule-page.component.css']
})
// tslint:disable-next-line:class-name
export class SchedulePageComponent implements OnInit {
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  eventSource = [];
  layoutdata: LayoutData = new LayoutData();
  viewTitle;
  countdata = [];

  calendar = {
    mode: 'week',
    currentDate: new Date(),
  };

  constructor(private alertCtrl: AlertController,
              public navCtrl: NavController,
              // tslint:disable-next-line:variable-name
              private _navigator: OnsNavigator,
              @Inject(LOCALE_ID) private locale: string,
              private calendarService: WebAPIService,
              // tslint:disable-next-line: variable-name
              private _params: Params) {}

  layoutCopy = {
    title: this._params.data.title,
    desc: this._params.data.desc,
    startTime: new Date(this._params.data.startTime),
    endTime: new Date(this._params.data.endTime)
  };

  ngOnInit() {
    this.eventSource.push(this.layoutCopy);
    console.log(this.layoutCopy);
  }

  Layout() {
    this._navigator.element.pushPage(LayoutPageComponent, {data: this.countdata});
  }


  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }

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
  }
    // Time slot was clicked
  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.layoutdata.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.layoutdata.endTime = (selected.toISOString());
  }
}
