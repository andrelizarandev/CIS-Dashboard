import { axiosInstanceWithAuth } from "../../utils/axiosInstance";
import { GetSpeakersResponse } from "./types";

export function getSpeakersApi () {
  return axiosInstanceWithAuth.get<GetSpeakersResponse>('/api-dashboard/speakers.php');
}

