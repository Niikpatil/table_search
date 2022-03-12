// import axios from "axios";
import React, { useState, useEffect } from "react";
import UserList from "./UserList";

const UserTable = () => {
  const [data, setData] = useState([]);
  const getData = () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    );

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  const DataList = data?.map((item) => <UserList key={item.id} item={item} />);

  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataList}</tbody>
      </table>
    </div>
  );
};

export default UserTable;
