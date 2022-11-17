export type SpeakerData = {
  coverPhoto:string;
  description:string;
  firstName:string;
  id:number;
  lastName:string;
  profilePhoto:string;
  title:string;
  visible:boolean;
}

export type GetSpeakersResponse = {
  speakers:SpeakerData[];
}