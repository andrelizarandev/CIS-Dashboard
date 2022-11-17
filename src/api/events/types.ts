export type EventData = {
  title:string;
  description:string;
  initDate:string;
  endDate:string;
  flyer1:string;
  flyer2:string;
  hasRegistration:boolean;
}

export type EventDataResponse = {
  events:EventData[];
}