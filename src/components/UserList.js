import React, { useState } from "react";
// import UserDetail from "./UserDetail";

const UserList = ({ item: { userId, title, completed, id } }) => {
  const [idClick, setIdClick] = useState({});

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIdClick(data);
        console.log(data);
      });
  };

  return (
    <tr>
      <td>{userId}</td>
      <td>{title}</td>
      <td>{completed === true ? "Complete" : "Incomplete"}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-warning"
          onClick={() => handleClick(id)}
        >
          View
        </button>
      </td>
    </tr>
  );
};
export default UserList;
