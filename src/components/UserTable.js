import axios from "axios";
import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import UserDetail from "./UserDetail";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [idClick, setIdClick] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchData = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIdClick(data);
        console.log(data);
      });
  };

  const DataList = data.map((item) => (
    <UserList key={item.id} item={item} onFetch={fetchData} />
  ));

  // const UDL = idClick.find((uds) => <UserDetail uds={uds} />);

  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        <div className="col-5">
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
        </div>
        <div className="col-5">
          <UserDetail fetchInfo={fetchData} />
        </div>
      </div>
    </div>
  );
};
export default UserTable;
