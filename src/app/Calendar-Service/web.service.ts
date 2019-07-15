import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization:
    // tslint:disable-next-line:max-line-length
    'Bearer ya29.Gl0iB6TAtPxLrCvrYxUU4E7f-CGWj6xUl1aoflPp7jNz-zPOcwXRd1POLEf65XyJC14H0i5ZVLuicdMdnHXT6FQ9Jbb_h4F63VMLpCwuEmphdvcwsINl00s2Xqaanu0',
    'Content-Type': 'application/json'
  })
};
const httpOptionsholidays = {
  headers: new HttpHeaders({
    Authorization:
    // tslint:disable-next-line:max-line-length
    'Bearer ya29.Gl1GB1ew2atVUrAoaaaNltdMpHPaOL8r_Bzd9et7HXhDgTCO0C981pSDZGEQJeJsLi9sNMYE_HhCjGmsj79X7398oGFacxZzsD2dYhbI4LBWDsQcDmMM_ZT0lgzV12s',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class WebService {

  constructor(private http: HttpClient) {}

  eventInsert(data: any) {
    const googleUrl =
      'https://www.googleapis.com/calendar/v3/calendars/jeanchen861118%40gmail.com/events?key=AIzaSyDY6un1bXW5aicpE4IsX4xBRX7plUjAw6M';

    return this.http.post(googleUrl, data, httpOptions);
  }

  GetEvent(): Observable<any> {
    const googleUrl =
      // tslint:disable-next-line:max-line-length
      'https://www.googleapis.com/calendar/v3/calendars/zh.taiwan%23holiday%40group.v.calendar.google.com/events?key=AIzaSyDY6un1bXW5aicpE4IsX4xBRX7plUjAw6M';

    return this.http.get(googleUrl, httpOptionsholidays);
  }
}
