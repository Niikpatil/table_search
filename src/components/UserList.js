import React from "react";

const UserList = ({ item: { userId, title, completed } }) => {
  return (
    <tr>
      <td>{userId}</td>
      <td>{title}</td>
      <td>{completed}</td>
      <td>View</td>
    </tr>
  );
};
export default UserList;
