import { axiosInstanceWithAuth } from "../../utils/axiosInstance";
import { LoginData, LoginDataResponse } from "./types";

export function loginApi (data:LoginData) {
  return axiosInstanceWithAuth.post<LoginDataResponse>('api-dashboard/login.php', data);
}