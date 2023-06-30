import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./reducer/student.reducer";

export const store = configureStore({
    reducer:{ //Khai báo danh sách các reduces được sử dụng nhé
        student: studentReducer,
    }
})
export const dispatch = store.dispatch; 
export const getState = store.getState;
