import React, { useState } from 'react';
import StudentIn4 from './Studentin4';

const Student = () => {
    const [fullName, setFullName] = useState("") 
    const [ diemToan, setDiemToan ] = useState([0])
    const [ diemLi, setDiemLi ] = useState([0])
    const [ diemHoa, setDiemHoa ] = useState([0])
    const [ studentInfo, setStudentInfo ] = useState([])

    const onClickHandler = (event) => {
        event.preventDefault();
        const in4Student = {
            fullName,
            diemToan: Number(diemToan),
            diemLi: Number(diemLi),
            diemHoa: Number(diemHoa),
        };

        // let copyArray = [...Student]
        // copyArray.push(in4Student)
        // setStudentInfo(copyArray)

        setStudentInfo[{in4Student, ...studentInfo}]
    }    

    const onChangeHandler = (event) => {
        setFullName(event.target.value)
    }

    return [
        <form>
            <div>
                <h1>Ho va ten</h1>
                <input 
                type="text" 
                onChange={event => (onChangeHandler)} />
            </div>
            <div>
                <h1>Nhap diem Toan</h1>
                <input 
                type="number" 
                onChange={event => (onChangeHandler)} />
            </div>
            <div>
                <h1>Nhap diem Li</h1>
                <input 
                type="number" 
                onChange={event => (onChangeHandler)} />            
            </div>
            <div>  
                <h1>Nhap diem Hoa</h1>
                <input 
                type="number" 
                onChange={event => (onChangeHandler)} />
            </div>
            <button onClick={onClickHandler}>Submit</button>
            <StudentIn4  />
        </form>
    ]
}

export default Student;