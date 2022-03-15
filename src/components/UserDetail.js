import React from "react";

const UserDetail = ({ idClick: { name, id, username, email } }) => {
  return (
    <div className="card">
      <div className="card">
        <div className="card-header">User Details</div>
        <div className="card-body">
          <p className="card-text">ToDo ID : {id}</p>
          <p className="card-text">ToDo UserName : {username}</p>
          <p className="card-text">User ID : {id}</p>
          <p className="card-text">Name : {name}</p>
          <p className="card-text">eMail : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
