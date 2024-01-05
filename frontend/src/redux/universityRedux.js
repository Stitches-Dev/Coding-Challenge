import { createSlice } from "@reduxjs/toolkit";

const universitySlice = createSlice({
  name: "university",
  initialState: {
    University: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get University
    getUniversityStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUniversitySuccess: (state, action) => {
      state.isFetching = false;
      state.University = action.payload;
    },
    getUniversityFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
   
   
  },
});

export const {  getUniversityStart, getUniversitySuccess, getUniversityFailure ,} = universitySlice.actions;
export default universitySlice.reducer;