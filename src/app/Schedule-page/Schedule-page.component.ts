import { Component, ViewChild, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator, Params } from 'ngx-onsenui';
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

//排班日期
scheduleDate : string ='22222';  

Dates = [
    {value: '星期一', label: '星期一'},
    {value: '星期二', label: '星期二'},
    {value: '星期三', label: '星期三'},
    {value: '星期四', label: '星期四'},
    {value: '星期五', label: '星期五'},
    {value: '星期六', label: '星期六'},
    {value: '星期日', label: '星期日'},    
  ];
//排班時間
scheduleSTime : string ='';
  

STimes = [
    {value: '6:00',  label:  '6:00'},
    {value: '7:00',  label:  '7:00'},
    {value: '8:00',  label:  '8:00'},
    {value: '9:00',  label:  '9:00'}, 
    {value: '11:00', label: '11:00'},
    {value: '12:00', label: '12:00'},
    {value: '13:00', label: '13:00'},
    {value: '14:00', label: '14:00'},
    {value: '15:00', label: '15:00'},
    {value: '16:00', label: '16:00'},
    {value: '17:00', label: '17:00'},
    {value: '18:00', label: '18:00'}, 
    {value: '19:00', label: '19:00'},
    {value: '20:00', label: '20:00'},
    {value: '21:00', label: '21:00'},   
    {value: '22:00', label: '22:00'},
    {value: '23:00', label: '23:00'},
    {value: '24:00', label: '24:00'}, 
  ];

scheduleETime : string ='';

ETimes = [
    {value: '6:00',  label:  '6:00'},
    {value: '7:00',  label:  '7:00'},
    {value: '8:00',  label:  '8:00'},
    {value: '9:00',  label:  '9:00'}, 
    {value: '11:00', label: '11:00'},
    {value: '12:00', label: '12:00'},
    {value: '13:00', label: '13:00'},
    {value: '14:00', label: '14:00'},
    {value: '15:00', label: '15:00'},
    {value: '16:00', label: '16:00'},
    {value: '17:00', label: '17:00'},
    {value: '18:00', label: '18:00'}, 
    {value: '19:00', label: '19:00'},
    {value: '20:00', label: '20:00'},
    {value: '21:00', label: '21:00'},   
    {value: '22:00', label: '22:00'},
    {value: '23:00', label: '23:00'},
    {value: '24:00', label: '24:00'},    
];
//排班人數
schedulePeople : string ='';
  

People = [
    {value: '一人', label: '1'},
    {value: '兩人', label: '2'},
    {value: '三人', label: '3'},
    {value: '四人', label: '4'},
    {value: '五人', label: '5'},
    {value: '六人', label: '6'}  
  ];


//總計

shiftList=[];

onClick(){  

  this.shiftList.push(this.scheduleDate+"的"+this.scheduleSTime+"-"+this.scheduleETime+"，需要"+this.schedulePeople)
  this.shiftList.slice(0,8)
  

}
onDelect(){
  this.shiftList=[]
}

onRe(){
 var i;
  for(i=0 ; i<8 ; i++)
  {
    console.log(this.shiftList[i])        
  }
  
}


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
              private calendarService: WebService,
              private _params: Params) {console.log('parameters:', _params.data);}

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
