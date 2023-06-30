import { useDispatch, useSelector } from 'react-redux';
export const useAppDispatch = () => useDispatch(); //useAppDispatch: Đây là một custom hook giúp bạn có thể 
//sử dụng hàm dispatch trong Redux. Khi bạn cần gửi một action đến store để thay đổi state, 
//bạn có thể sử dụng useAppDispatch để lấy được hàm dispatch.
//Tức là khi gọi 1 actions thì sẽ dùng cái này
export const useAppSelector = useSelector;
// Đây là một custom hook giúp bạn có thể lấy được state từ Redux store. Khi bạn cần truy cập vào state trong Redux store, 
//bạn có thể sử dụng useAppSelector để lấy giá trị của state cần thiết.
//Còn cái này là để lấy ra giá trị được trả về khi thực hiện actions(có thể sử dụng getState)
//*getState????: Là một phương thức trực tiếp của Redux store để truy cập vào state. Bạn có thể sử dụng nó trong bất kỳ phạm 
//vi nào của ứng dụng để lấy giá trị state hiện tại. 
//Tuy nhiên, khi bạn sử dụng getState, bạn phải tự quản lý việc cập nhật component khi state thay đổi.
//ví dụ : const data = store.getState().tên_của_slice; ==> ví dụ ở đây nếu mình dùng sẽ là : const data = store.getState().student;
//và hoàn toàn có thể gọi cả actions từ getState
// useAppSelector() thì sẽ thường được sủ dụng ở các function component, còn getState thì dùng cho phạm vi lớn hơn
