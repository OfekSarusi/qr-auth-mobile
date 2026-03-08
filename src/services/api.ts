import axios from "axios";

const BASE_URL = "http://192.168.1.26:8080";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});