// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8082/api', // Update with your base URL
  headers:{
    'Content-Type':'application/json'
  }

});

export default axiosInstance;
