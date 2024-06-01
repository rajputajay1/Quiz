// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://adminproducthub.onrender.com/api', // Update with your base URL
  headers:{
    'Content-Type':'application/json'
  }

});

export default axiosInstance;
