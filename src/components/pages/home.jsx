import { Button, Modal, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { GetResponseObject, GetStudent, SetStudent } from '../../app/reducer/student.reducer';
import { StudentAPI } from '../../apis/studentAPI';
import { ModalView } from './modal';

const Home = () => {
    const data = useAppSelector(GetStudent); //lấy ra dữ liệu
    const dispatch = useAppDispatch();
    const [current, setCurrent] = useState(1); //(=== pageNo)
    const [student, setStudent] = useState({});
    let [status, setStatus] = useState(false); //dùng để mở view Modal
    // let [listStudent, setListStudent] = useState([]);
    // let newStudent = useAppSelector(GetResponseObject);
    // let [count, setCount] = useState(false);


    useEffect(() => {
        fetchData();
    }, [current], [dispatch]);


    //Gọi api getAll
    const fetchData = async () => {
        await StudentAPI.getAll(current - 1).then((response) => {
                dispatch(SetStudent(response.data.content));
        });
    }

    const columns = [
        {
            title: 'Ten',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Tuoi',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Gioi tinh',
            dataIndex: 'gender',
            key: 'gender'
        },
        {
            title: 'Dia chi',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'Hanh dong',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <Button type="primary" onClick={() => {
                        setStudent(null)
                        setStatus(true)
                    }} >Add</Button>
                    <ModalView modalOpen={status} setModalOpen={setStatus} student={student}/>
                    <Button>Detail</Button>
                    <Button>Update</Button> 
                    <Button>Remove</Button>
                </span>
            ),
        },
    ];

    return (
        <div>
            Hala
            <Table dataSource={data} columns={columns} rowKey="id" pagination={false} />
        </div>
    );
}

export default Home;
