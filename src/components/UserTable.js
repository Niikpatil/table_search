import axios from "axios";
import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";
import UserList from "./UserList";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [idClick, setIdClick] = useState([]);

  const url = `https://jsonplaceholder.typicode.com/todos`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const DataList = data.map((item) => <UserList key={item.id} item={item} />);

  // const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  // const fetchData = () => {
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setIdClick(data);
  //       console.log(data);
  //     });
  // };

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Todo_ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataList}</tbody>
      </table>
      <UserDetail fetchData />
    </div>
  );
};
export default UserTable;

// const fetchData = (fetchData) => {
// return response.json(fetchData);
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     setUsers(data);
//   });
// };

// const handleClick = () => {
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((idClick) => {
//       setIdClick(idClick);
//       console.log(idClick);
//     });
// };s
