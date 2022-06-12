import React, { useState } from 'react';
import { Table, Radio } from "@nextui-org/react";
// import { tinhGPA } from "../helper/common";
// import { useState } from "react";

const StudentInfo = (props) => {
  const { sortBy, setSortBy } = useState("UP");
  return (
    <div>
      <form>
      <h1>Danh sách học sinh</h1>
      <Radio.Group 
        label="Sort" 
        defaultValue="UP" 
        onChange={(value) => {
        setSortBy(value);
      }}>
        <Radio value="UP" checked={sortBy === "UP"}>
          Tang
          </Radio>
        <Radio value="DOWN" checked={sortBy === "DOWN"}>
          Giam
          </Radio>
      </Radio.Group>
      </form>
      <form>
      <Table
        aria-label="Example static collection table with multiple selection"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="multiple"
      >
        <Table.Header>
          <Table.Column>Tên</Table.Column>
          <Table.Column>Điểm Toán</Table.Column>
          <Table.Column>Điểm Hoá</Table.Column>
          <Table.Column>Điểm Lý</Table.Column>
          <Table.Column>GPA</Table.Column>
        </Table.Header>
        <Table.Body>
          {props.studentsInfo.map((st) => {
            console.log(st);
            return (
              <Table.Row key={st.id}>
                <Table.Cell>{st.fullName}</Table.Cell>
                <Table.Cell>{st.diemToan}</Table.Cell>
                <Table.Cell>{st.diemHoa}</Table.Cell>
                <Table.Cell>{st.diemLy}</Table.Cell>
                <Table.Cell>
                  {st.GPA.toFixed(2)}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={10}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>
      </form>
    </div>
  );
};

export default StudentInfo;