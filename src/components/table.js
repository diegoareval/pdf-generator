import React from "react";
import { studentFakeApi } from "../data/students";
import {getKeys} from "../helper"

const Table = () => {
  return (
    <table>
      <tr>
        {getKeys(studentFakeApi).map((keys) => (
          <th>{keys}</th>
        ))}
      </tr>
      {studentFakeApi.map((student) => (
        <tr>
          <td>{student.university}</td>
          <td>{student.name}</td>
          <td>{student.department}</td>
          <td>{student.grade}</td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
