import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  service_name: "Mathedemic"

};

const tutoringSlice = createSlice({
  name: "tutoring",
  initialState,
  reducers: {
    updateTutoring: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updateTutoring } = tutoringSlice.actions;
export default tutoringSlice.reducer;
