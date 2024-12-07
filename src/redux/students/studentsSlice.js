import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchStudentsStart: (state) => {
      state.loading = true;
    },
    fetchStudentsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    fetchStudentsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsFailure,
} = studentsSlice.actions;
export default studentsSlice.reducer;
