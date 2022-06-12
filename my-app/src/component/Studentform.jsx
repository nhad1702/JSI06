import React, { useState, newState } from "react";
import { v4 as uuidv4 } from "uuid";
import StudentInfo from "./Studentinfo";
import { tinhGPA } from "../helper/common";

const StudentForm = () => {
  const [student, setStudent] = useState({
    fullName: "",
    diemToan: 0,
    diemHoa: 0,
    diemLy: 0,
    GPA: 0,
  });
  const [studentsInfo, setStudentsInfo] = useState([]);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  const sortUp = () => {
    newState = [...studentsInfo];
    newState.sort((a, b) => {
      return a.GPA - b.GPA
    });
    setStudentsInfo(newState)
  }

  const sortDown = () => {
    newState = [...studentsInfo];
    newState.sort((a, b) => {
      return b.GPA - a.GPA
    });
    setStudentsInfo(newState)
  }

  const onClickHandler = (event) => {
    event.preventDefault();
    if (student.fullName !== "") {
      let diemToan = Number(student.diemToan);
      let diemHoa = Number(student.diemHoa);
      let diemLi = Number(student.diemLy);
      const newStudent = {
        ...student,
        id: uuidv4(),
        diemToan,
        diemHoa,
        diemLi,
        GPA: tinhGPA(
          diemToan,
          diemHoa, 
          diemLi,
          ),
      };
      setStudentsInfo([newStudent, ...studentsInfo]);
      setStudent({
        fullName: "",
        diemToan: 0,
        diemHoa: 0,
        diemLy: 0,
      });
    }
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Họ và tên:</label>
          <input
            type="text"
            value={student.fullName}
            name="fullName"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Toán:</label>
          <input
            type="number"
            value={student.diemToan}
            name="diemToan"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Hoá:</label>
          <input
            type="number"
            value={student.diemHoa}
            name="diemHoa"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Điểm Lý:</label>
          <input
            type="number"
            value={student.diemLy}
            name="diemLy"
            onChange={onChangeHandler}
          />
        </div>
        <button onClick={onClickHandler}>Submit</button>
      </form>
      <StudentInfo 
        studentsInfo={studentsInfo} 
        sortUp={sortUp} 
        sortDOwn={sortDown} 
      />
    </div>
  );
};

export default StudentForm;