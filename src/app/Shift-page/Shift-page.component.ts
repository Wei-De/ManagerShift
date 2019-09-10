import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[ShiftPage]',
  templateUrl: './Shift-page.component.html',
  styleUrls: ['./Shift-page.component.css']
})

// tslint:disable-next-line:class-name
// 員工搜尋群組後
export class ShiftPageComponent implements OnInit {

  //班表日期
  shiftDate : string ='';  

  Dates = [
      {value: '星期一', label: '星期一'},
      {value: '星期二', label: '星期二'},
      {value: '星期三', label: '星期三'},
      {value: '星期四', label: '星期四'},
      {value: '星期五', label: '星期五'},
      {value: '星期六', label: '星期六'},
      {value: '星期日', label: '星期日'},    
    ]; 
  
  //人數新增與刪除
  
   onDisabled(event)
   {
     if(event.value === 'Y'){


     }
     else{

     }
   }
  
  // Times = [
  //     {value: '早班', label: '6:00-10:00'},
  //     {value: '中班', label: '10:00-14:00'},
  //     {value: '下午班', label: '14:00-18:00'},
  //     {value: '晚班', label: '18:00-23:00'}    
  //   ];

  //所需要的員工數
  // People ={
  //   morinig:'2',
  //   lunch:'',
  //   afternoon:'',
  //   night:''
  // };

  // 班表時間總紀錄
  // shiftList={
  //   Mon:'',
  //   Tue:'',
  //   Wed:'',
  //   Thu:'',
  //   Fri:'',
  //   Sat:'',
  //   Sun:''
  // }

  

    // tslint:disable-next-line:variable-name
    constructor(private _navigator: OnsNavigator) {}
    ngOnInit() {}
}
