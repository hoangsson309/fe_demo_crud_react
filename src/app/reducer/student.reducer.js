import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const StudentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        SetStudent: (state, action) => {
            state = action.payload;
            return state;
        },
        SetResponseObject : (state, action) => {
            state = action.payload;
            return state;
        }
}
});

export const GetStudent = (state) => state.student;
export const GetResponseObject = (state) => state.responseObject;
export const { SetStudent, SetResponseObject } = StudentSlice.actions;
export default StudentSlice.reducer;