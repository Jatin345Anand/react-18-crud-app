import axios from 'axios';
import { loginSuccess } from './authSlice';

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', { email, password });
    dispatch(loginSuccess(response.data.token));
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error('Invalid credentials');
  }
};
