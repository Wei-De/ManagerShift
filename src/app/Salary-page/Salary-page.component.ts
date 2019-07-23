import { Component,OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { OnsNavigator } from 'ngx-onsenui';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ons-page[SalaryPage]',
  templateUrl: './Salary-page.component.html',
  styleUrls: ['./Salary-page.component.css']
})
// tslint:disable-next-line:class-name
export class SalaryPageComponent  implements OnInit {
  Salary='150'

  Break='30'
  
  Today='11000'
    
    
  ngOnInit() {
    
  }



  //選擇計算薪水方式
  // editSelects(event) {
  //   document.getElementById('choose-sel').removeAttribute('modifier');
  //   if (event.target.value == '今日薪水' || event.target.value == '今月薪水') {
  //     document.getElementById('choose-sel').setAttribute('modifier', event.target.value);
  //   }
  // }
  
}



