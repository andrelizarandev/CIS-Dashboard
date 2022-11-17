// Axios
import { axiosInstanceWithAuth } from "../../utils/axiosInstance";

// Types
import { EventDataResponse } from "./types";

export function getEventsApi () {
  return axiosInstanceWithAuth.get<EventDataResponse>('/api-dashboard/events.php')
}