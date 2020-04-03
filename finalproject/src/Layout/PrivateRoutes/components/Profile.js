import React, { useEffect, useState } from "react";
import { getId } from "../../../Services/Auth.service/CoetusAuth";
import { getUserInfo } from "../../../Services/CoetusService/Coetus";
import { useHistory } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  let [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    let id = getId();
    getUserInfo(id).then(res => {
      setUser(res.data.user);
    });
  }, []);

  return (
    <div className="user-wrapper">
      <div>
        <button className="button" onClick={() => history.push("/allusers")}>
          All users
        </button>
      </div>
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
    </div>
  );
};

export default Profile;
