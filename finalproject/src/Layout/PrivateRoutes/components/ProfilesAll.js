import React, { useState, useEffect } from "react";
import { getUsers } from "../../../Services/CoetusService/Coetus";
import OneUser from "./OneUser";
import "./OneUser.css";

const ProfilesAll = () => {
  const [users, setUsers] = useState([]);
  const [perPage, setPerPage] = useState(6);
  const [page, setPage] = useState(0);
  const [pomocni, setPomocni] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res.data.users);
    });
  }, []);

  const pageNumber = () => (users.length - 1) / perPage;
  const pages = pageNumber => {
    let pages = [];
    for (let i = 0; i < pageNumber; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleInput = e => {
    if (e.target.value === "") {
      setPomocni([]);
      return;
    }
    let filtered = users.filter(el =>
      el.username.toLowerCase().includes(e.target.value)
    );
    setPomocni(filtered);
  };

  return (
    <div className="user-list">
      <div>
        <div className="user-control">
          <select onChange={e => setPerPage(e.target.value)}>
            <option value="6"> 6</option>
            <option value="12"> 12</option>
            <option value="18"> 18</option>
          </select>
          <input
            className="filter-control"
            type="text"
            placeholder="Filter..."
            onChange={e => handleInput(e)}
          ></input>
        </div>
        <div className="user-grid">
          {pomocni.length > 0
            ? pomocni.map(el => <OneUser key={el.username} user={el} />)
            : users
                .slice(page * perPage, (page + 1) * perPage)
                .map(el => <OneUser key={el.username} user={el} />)}
        </div>
      </div>
      <div>
        {pages(pageNumber()).map(page => (
          <button
            className="btn-form"
            onClick={() => {
              setPage(page);
            }}
            key={page}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfilesAll;
