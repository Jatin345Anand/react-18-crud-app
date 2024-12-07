// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000/api/students';

// export const getStudents = () => axios.get(API_BASE_URL);
// export const getStudentById = (id) => axios.get(`${API_BASE_URL}/${id}`);
// export const createStudent = (student) => axios.post(API_BASE_URL, student);
// export const updateStudent = (id, student) => axios.put(`${API_BASE_URL}/${id}`, student);
// export const deleteStudent = (id) => axios.delete(`${API_BASE_URL}/${id}`);

import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const API_BASE_URL = 'http://localhost:5000/api/students';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor to include token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getStudents = () => apiClient.get('/');
export const getStudentById = (id) => apiClient.get(`/${id}`);
export const createStudent = (student) => apiClient.post('/', student);
export const updateStudent = (id, student) => apiClient.put(`/${id}`, student);
export const deleteStudent = (id) => apiClient.delete(`/${id}`);

