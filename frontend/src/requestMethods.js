import axios from "axios";

// Local backend URL
const BASE_URL = "http://localhost:8000/api/";

// Local images path (agar backend same port pe chal raha hai)
export const pf = "http://localhost:8000/images";

// Public requests (no auth)
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

// User requests (with auth token later if needed)
export const userRequest = axios.create({
  baseURL: BASE_URL,
});