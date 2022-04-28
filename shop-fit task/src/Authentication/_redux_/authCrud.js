import axios from "axios";

export const ME_URL= "api/me"
export const LOGIN_URL = "api/auth/login";

export function login(username, password) {
  return axios.post(LOGIN_URL, { username, password });
}

export function getUserByToken(authToken) {
  return axios.get(ME_URL,{authToken});
}
