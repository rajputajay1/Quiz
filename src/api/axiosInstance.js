// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cuvette-tech-backend.onrender.com/api', // Update with your base URL
  headers:{
    'Content-Type':'application/json'
  }

});

export default axiosInstance;
