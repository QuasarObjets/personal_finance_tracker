// File: /gestion-gastos-personales/app/src/config/axios.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your API URL
});

export default instance;
