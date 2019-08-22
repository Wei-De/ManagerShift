import { OnsenModule } from 'ngx-onsenui';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgCalendarModule  } from 'ionic2-calendar';
import { IonicModule } from '@ionic/angular';
// Service
import { WebAPIService } from './web-Service/web.api.service';

import { AppRoutingModule } from './app-routing.module';
// Component
import { AppComponent } from './app.component';
import { logInPageComponent } from './logIn-page/logIn-page.component';
import { RgtPageComponent } from './Rgt-page/Rgt-page.component';
import { MainPageComponent } from './Main-page/Main-page.component';
import { MemberPageComponent } from './Member-page/Member-page.component';
import { CalendarPageComponent } from './Calendar-page/Calendar-page.component';
import { ChatRoomPageComponent } from './ChatRoom-page/ChatRoom-page.component';
import { SalaryPageComponent } from './Salary-page/Salary-page.component';
import { SettingPageComponent } from './Setting-page/Setting-page.component';
import { GroupPageComponent } from './Group-page/Group-page.component';
import { SchedulePageComponent } from './Schedule-page/Schedule-page.component';
import { AddEventPageComponent } from './AddEventCalendar-page/AddEventCalendar-page.component';
import { eventTextPageComponent } from './eventText-page/eventText-page.component';
import { LayoutPageComponent } from './Layout-page/Layout-page.component';



@NgModule({
  declarations: [
    AppComponent, logInPageComponent, RgtPageComponent, MainPageComponent, MemberPageComponent,
    CalendarPageComponent, ChatRoomPageComponent, SalaryPageComponent, SettingPageComponent,
    GroupPageComponent, SchedulePageComponent, AddEventPageComponent, eventTextPageComponent,
    LayoutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    OnsenModule,
    IonicModule,
    NgCalendarModule
  ],
  entryComponents: [logInPageComponent,
                    RgtPageComponent,
                    MainPageComponent,
                    MemberPageComponent,
                    CalendarPageComponent,
                    ChatRoomPageComponent,
                    SalaryPageComponent,
                    SettingPageComponent,
                    GroupPageComponent,
                    SchedulePageComponent,
                    AddEventPageComponent,
                    eventTextPageComponent,
                    LayoutPageComponent],
  providers: [WebAPIService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
