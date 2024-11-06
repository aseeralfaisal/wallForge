import { BASE_URL, IMAGES_API_KEY } from "@config";
import axios from "axios";

const baseURL = BASE_URL;
const apiInstance = axios.create({
  baseURL
});

apiInstance.interceptors.request.use(function(config) {
  config.headers.Authorization = IMAGES_API_KEY;
  return config;
}, function(error) {
  return Promise.reject(error);
});

apiInstance.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
});

export { apiInstance }
