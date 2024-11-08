import axios from "axios";
import { LLM_API_KEY, LLM_BASE_URL } from "@config";

const apiLlmInstance = axios.create({
  baseURL: LLM_BASE_URL
});
const { interceptors } = apiLlmInstance;

interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${LLM_API_KEY}`;
  return config;
}, (error) => Promise.reject(error));

interceptors.response.use((response) => response,
  (error) => Promise.reject(error));

export { apiLlmInstance };
