// services/api.ts
import axios from 'axios';

// const api = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333',
// });

// export default api;

export const api = axios.create({
    baseURL: "http://localhost:3333",
});

