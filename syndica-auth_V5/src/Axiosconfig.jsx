import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';
const API_TIMEOUT = 10000;

axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL, 
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request that include sanctum csrf-cookie and personal access token
axiosInstance.interceptors.request.use(
    (config) => {
    // Get the personal access token from localStorage(IF REMEMBERED) or sessionStorage(IF TEMPORARY)
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    // const xsrfToken = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN='));

    // console.log(xsrfToken);
    
    if (token) {
      // Add the token to the Authorization header as a Bearer token
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
