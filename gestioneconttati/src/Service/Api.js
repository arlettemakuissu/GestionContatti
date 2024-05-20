import axios from "axios";
const headers = { "Access-Control-Allow-Origin": "*" };
export const BASE_URL = "http://localhost:8086/";

export const get = (url) => {
  return axios.get(`${BASE_URL}${url}`, { headers });
};

export const post = (url, data) => {
  return axios.post(`${BASE_URL}${url}`, data, { headers });
};
export const Delete = (url) => {
  return axios.delete(`${BASE_URL}${url}`, { headers });
};

export const put = (url, data) => {
  return axios.put(`${BASE_URL}${url}`, data, { headers });
};
