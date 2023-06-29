import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const StudentSlice = createSlice({
    name: 'student', //tên
    initialState, //giá trị khởi tạo
    reducers: { //danh sách 
        SetStudent: (state, action) => {
            state = action.payload; //Khi gọi API từ dòng 25 components/pages/home thì dữ liệu sẽ được truyền đến reducer, 
                                    //và action.payload dùng để lấy ra dữ liệu, và cập nhật lại dữ liệu
                                    //dispatch(SetStudent(response.data.content)); --gọi API
            return state;
        }, 
        //cái dưới đang suy nghĩ ==> bỏ qua
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
