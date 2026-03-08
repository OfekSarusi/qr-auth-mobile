import axios from "axios";

// Base URL of the local backend server
const BASE_URL = "http://192.168.1.26:8080";

// Shared Axios instance for all backend API requests
export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});