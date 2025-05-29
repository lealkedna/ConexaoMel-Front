// services/api.ts
import axios from 'axios';
import { getCookieClient } from "@/lib/cookiesClient";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://conexao-mel.onrender.com/',
    withCredentials: true,
});

// Lê o cookie 'signin' e envia como Authorization
api.interceptors.request.use((config) => {
  const token = getCookieClient(); 
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// export const api = axios.create({
//     baseURL: "http://localhost:3333",
//     // https://conexao-mel.onrender.com/
// });

