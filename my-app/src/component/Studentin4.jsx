const StudentIn4 = (props) => {
    return [
        <div>
                <h1>Danh sach hoc sinh</h1>
                {studentInfo.map((st, idx) => {
                    return [
                        <div key={idx}>
                    <p>Ten hoc sinh: {st.fullName}</p>
                    <p>Diem Toan: {st.diemToan}</p>
                    <p>Diem Li: {st.diemLi}</p>
                    <p>Diem Hoa: {st.diemHoa}</p>
                </div>
                    ]
                })}
            </div>
    ]
}

export default StudentIn4;