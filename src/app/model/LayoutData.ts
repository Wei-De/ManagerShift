export interface LayoutDataModel {
  title: string;
  desc: string;
  startTime: any;
  endTime: any;
}

export class LayoutData implements LayoutDataModel {
  title = '';
  desc = '';
  startTime = '';
  endTime = '';
}
