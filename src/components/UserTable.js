import axios from "axios";
import React, { useState, useEffect } from "react";
import UserList from "./DataList/UserList";
import UserDetail from "./UserDetail";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [idClick, setIdClick] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const fetchData = (idClick) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${idClick}`)
      .then((response) => response.json())
      .then((data) => {
        setIdClick(data);
        console.log(data);
      });
  };

  const DataList = data
    .filter((search_data) => {
      if (searchText === "") {
        return search_data;
      } else if (
        search_data.title.includes(searchText.toLowerCase()) ||
        search_data.id.toString().indexOf(searchText.toLowerCase()) > -1
      ) {
        return search_data;
      }
    })
    .slice(0, 3)
    .map((item) => (
      <UserList
        key={item.id}
        item={item}
        searchText={searchText}
        onFetch={fetchData}
      />
    ));

  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        <div className="col-4">
          <div className="row">
            <label className="col-4 col-form-label">
              <b>Todos</b>
            </label>
            <div className="col-6">
              <input
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>ToDo_ID</th>
                <th>Title</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{DataList}</tbody>
          </table>
        </div>
        <div className="col-6">
          <UserDetail idClick={idClick} data={data} />
        </div>
      </div>
    </div>
  );
};
export default UserTable;
