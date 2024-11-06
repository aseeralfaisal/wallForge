import axios from "axios";
import { BASE_URL, IMAGES_API_KEY } from "@config";

const apiInstance = axios.create({
  baseURL: BASE_URL
});
const { interceptors } = apiInstance;

interceptors.request.use((config) => {
  config.headers.Authorization = IMAGES_API_KEY;
  return config;
}, (error) => Promise.reject(error));

interceptors.response.use((response) => response,
  (error) => Promise.reject(error));

export { apiInstance }
