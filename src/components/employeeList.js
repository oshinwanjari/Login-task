import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const user = [
      {
        id: 1,
        name: "test1",
        age: "11",
        gender: "male",
        email: "test1@gmail.com",
        phoneNo: "9415346313"
      },
      {
        id: 2,
        name: "test2",
        age: "12",
        gender: "male",
        email: "test2@gmail.com",
        phoneNo: "9415346314"
      },
      {
        id: 3,
        name: "test3",
        age: "13",
        gender: "male",
        email: "test3@gmail.com",
        phoneNo: "9415346315"
      },
      {
        id: 4,
        name: "test4",
        age: "14",
        gender: "male",
        email: "test4@gmail.com",
        phoneNo: "9415346316"
      },
      {
        id: 5,
        name: "test5",
        age: "15",
        gender: "male",
        email: "test5@gmail.com",
        phoneNo: "9415346317"
      },
      {
        id: 6,
        name: "test6",
        age: "16",
        gender: "male",
        email: "test6@gmail.com",
        phoneNo: "9415346318"
      }
    ];

    return (
      <div>
        <h1>Employee List:</h1>
        <Table className="employee-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Gmail</th>
              <th>Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {user &&
              user.map((user, index) => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNo}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EmployeeList;
