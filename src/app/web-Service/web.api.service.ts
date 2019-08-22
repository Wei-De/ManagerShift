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
    'Bearer ya29.Gl1WB23H1CvSV0g4jEjTzsgvVsywjJPyhtSCGcW8wIV_YDB0p5hSHYBmXps5tEzrXg11GodX0-0nzrHpcN2w46ODL78yZMloOPw_uWM_PGBWfTuELSizbWAd09XBPek',
    'Content-Type': 'application/json'
  })
};
const API_PATH = ''; // PRD

@Injectable()
export class WebAPIService {

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
  // 登入帳號驗證
  CheckUserIdPwd(data: any): Observable<any> {
    return this.http.post(API_PATH + 'User/CheckUserIdPwd', data, httpOptions);
  }
}
