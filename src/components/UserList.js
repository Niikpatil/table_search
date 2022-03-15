import React from "react";

const UserList = ({ item: { title, completed, id }, onFetch }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{completed === true ? "Complete" : "Incomplete"}</td>
      <td>
        <button
          type="button"
          className="btn btn-sm btn-warning"
          onClick={() => onFetch(id)}
        >
          View
        </button>
      </td>
    </tr>
  );
};
export default UserList;
