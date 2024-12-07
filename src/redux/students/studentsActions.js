import axios from 'axios';
import {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
} from './studentsSlice';

export const fetchStudents = () => async (dispatch) => {
  dispatch(fetchStudentsStart());
  try {
    const response = await axios.get('http://localhost:5000/api/students', {
      headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
    });
    dispatch(fetchStudentsSuccess(response.data));
  } catch (error) {
    dispatch(fetchStudentsFailure(error.message));
  }
};
