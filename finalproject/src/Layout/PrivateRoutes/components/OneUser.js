import React from "react";
import "./OneUser.css";

const OneUser = ({ user }) => {
  return (
    <div className="one-user">
      <div className="profile-holder"></div>
      <div className="user-label">
        <label>{user.username}</label>
        <label>
          {user.name} {user.surname}
        </label>
        <label>{user.email}</label>
        <label>{user.user_id}</label>
      </div>
    </div>
  );
};

export default OneUser;
