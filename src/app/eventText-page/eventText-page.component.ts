import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID, Input } from '@angular/core';
import { AlertController, NavController, ModalController, Events } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { OnsNavigator, Params } from 'ngx-onsenui';

import { WebAPIService } from '../web-Service/web.api.service';

import { MainPageComponent } from '../Main-page/Main-page.component';
import { CalendarData } from '../model/CalendarData';
import { AddEventPageComponent } from '../AddEventCalendar-page/AddEventCalendar-page.component';
import * as ons from 'onsenui';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[eventTextPage]',
  templateUrl: './eventText-page.component.html',
  styleUrls: ['./eventText-page.component.css']
})
export class eventTextPageComponent implements OnInit {

eventDataSource = [];

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
    this.eventDataSource.push(this.eventCopy);
    this.change();
  }

  change() {
    this.eventDataSource[0].startTime = formatDate(this.eventCopy.startTime, 'yyyy/MM/dd HH:mm', this.locale);
    this.eventDataSource[0].endTime = formatDate(this.eventCopy.endTime, 'yyyy/MM/dd HH:mm', this.locale);
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
}
