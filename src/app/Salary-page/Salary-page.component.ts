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
  conutSalary : string ='';  

  CSalary = [
      {value: 'day', label: '今日薪水'},
      {value: 'week', label: '一週薪水'},
      {value: 'mon', label: '今月薪水'},            
    ];
  
  inputData={
    Hsalary:'150',
    break:'30分',
    total:''
  }

  
    
    
  ngOnInit() {
    
  }



  
  
}



