import React from "react";

const UserDetail = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">User Details</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>username</p>

            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
