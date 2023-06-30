import { useState } from 'react';
import { Form, Input, Select, Button, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { StudentAPI } from '../../apis/studentAPI';
import { GetResponseObject, SetResponseObject, SetStudent } from '../../app/reducer/student.reducer';
import { dispatch } from '../../app/store';

const { Option } = Select;

export const ModalView = (props) => {
    //props viết tắt của(properties ==> các thuộc tính), 
    //khi mình gọi cái ModalView thì sẽ phải truyền vào các properties đã được khai báo
    const { modalOpen, setModalOpen, student } = props; //Là cái này đây
    const [form] = Form.useForm();
    const dispath = useAppDispatch();
    const dispatch = useAppDispatch();

    //setValues cho form
    form.setFieldsValue(student);

    const fetchData = async () => {
        await StudentAPI.getAll(0).then((response) => {
                dispatch(SetStudent(response.data.content));
        });
    }

    const onFinish = () => {
        const newStudent = form.getFieldsValue(); //lấy values của form 
        StudentAPI.add(newStudent); //gọi Api thêm
        .then((response) => {
            dispath(SetStudent(response.data.content)); //sau khi thêm thì gọi actions để set lại dữ liệu (danh sách student);
            // dispath(SetResponseObject(response.data))
            //Thêm xong rồi set lại như ban đầu thoiiii
            setModalOpen(false);
            form.setFieldsValue(null);
            console.log(response.data);
            fetchData();
        });
      };
  return (
    <Modal
        open={modalOpen}
        title="Thêm Bản Ghi"
    >
      <Form 
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="Tên"
          name="name"
          rules={[{ required: true, message: 'Vui lòng nhập tên của bạn' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tuổi"
          name="age"
          rules={[{ required: true, message: 'Vui lòng nhập tuổi của bạn' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Giới tính"
          name="gender"
          rules={[{ required: true, message: 'Vui lòng chọn giới tính của bạn' }]}
        >
          <Select>
            <Option value="Nam">Nam</Option>
            <Option value="Nu">Nữ</Option>
            <Option value="Khac">Khác</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="address"
          rules={[{ required: true, message: 'Vui lòng nhập địa chỉ của bạn' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
