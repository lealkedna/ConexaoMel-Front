// services/api.ts
import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.BACKEND_URL || 'http://localhost:3333',
    withCredentials: true,
});


// export const api = axios.create({
//     baseURL: "http://localhost:3333",
//     // https://conexao-mel.onrender.com/
// });

