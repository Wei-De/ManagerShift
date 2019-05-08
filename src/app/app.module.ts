import { OnsenModule } from 'ngx-onsenui';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgCalendarModule  } from 'ionic2-calendar';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
// Component
import { AppComponent } from './app.component';
import { logInPageComponent } from './logIn-page/logIn-page.component';
import { RgtPageComponent } from './Rgt-page/Rgt-page.component';
import { MainPageComponent } from './Main-page/Main-page.component';
import { MemberPageComponent } from './Member-page/Member-page.component';
import { CalendarPageComponent } from './Calendar-page/Calendar-page.component';


@NgModule({
  declarations: [
    AppComponent, logInPageComponent, RgtPageComponent, MainPageComponent, MemberPageComponent,
    CalendarPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OnsenModule,
    IonicModule,
    NgCalendarModule
  ],
  entryComponents: [logInPageComponent, RgtPageComponent, MainPageComponent, MemberPageComponent, CalendarPageComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
