export interface CalendarDataModel {
  title: string;
  desc: string;
  startTime: any;
  endTime: any;
}

export class CalendarData implements CalendarDataModel {
  title = '';
  desc = '';
  startTime = '';
  endTime = '';
}
