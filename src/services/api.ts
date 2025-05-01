// services/api.ts
import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://conexao-mel.onrender.com/',
    withCredentials: true,
});


// export const api = axios.create({
//     baseURL: "http://localhost:3333",
//     // https://conexao-mel.onrender.com/
// });

