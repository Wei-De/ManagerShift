import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    // tslint:disable-next-line: max-line-length
    Authorization:
    'ya29.GlsAB_flHvIvObsQBHPoPDpKmGkq8E4lO9wXqknxLeVHuVGpQj7JXyk4AGKRqaq68O-FbY6NN2LkM3IFS5kaj0QhUQxrskL1wKL20uIgHSujGI7T8fp__o3PVh1x',
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class WebService {

  constructor(private http: HttpClient) {}

  eventInsert(data: any) {
    const googleUrl =
      'https://www.googleapis.com/calendar/v3/calendars/jeanchen861118%40gmail.com/events?key=AIzaSyCvxNJSBMzvRpgyqqvCfjK-zj-Q9LjeP3A';

    return this.http.post(googleUrl, data, httpOptions);
  }

  GetEvent(): Observable<any> {
    const googleUrl =
      'https://www.googleapis.com/calendar/v3/calendars/jeanchen861118%40gmail.com/events?key=AIzaSyCvxNJSBMzvRpgyqqvCfjK-zj-Q9LjeP3A';

    return this.http.get(googleUrl, httpOptions);
  }
}
