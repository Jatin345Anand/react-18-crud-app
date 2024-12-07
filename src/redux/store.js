import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import studentsReducer from './students/studentsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentsReducer,
  },
});

export default store;
