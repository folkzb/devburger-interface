import dotenv from 'dotenv';
import axios from 'axios';

// Carrega as variáveis do arquivo .env
dotenv.config();
const APP_URL = +process.env.APP_URL;

export const api = axios.create({
  baseURL: APP_URL,
});

api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('devburger:userData');

  const token = userData && JSON.parse(userData).token;
  config.headers.authorization = `Bearer ${token}`;

  return config;
});
