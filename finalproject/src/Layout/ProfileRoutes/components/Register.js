import React, { useState } from "react";
import { registerUser } from "../../../Services/CoetusService/Coetus";
import "./Register.css";
import { setToken, setId } from "../../../Services/Auth.service/CoetusAuth";
import { useHistory } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSeconPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleRegister = () => {
    if (
      name === "" ||
      surname === "" ||
      username === "" ||
      password === "" ||
      email === ""
    ) {
      window.confirm("Please fill out all required fields");
      return;
    }
    else if (password === secondPassword) {
      registerUser(name, surname, username, password, email).then(res => {
        setToken(res.data.token);
        setId(res.data.user.user_id);
        history.push("/");
        window.alert("Uspesno ste se registrovali!");
      });
    } else {
      window.alert("Please match passwords");
      return;
    }
  };

  return (
    <div className="container">
      <div className="input-form">
        <label className="please">Please fill out this form:</label>
        <input
          required
          className="input"
          type="text"
          placeholder="Name"
          autoComplete="off"
          onInput={e => {
            e.preventDefault();
            setName(e.target.value);
          }}
        ></input>
        <input
          required
          className="input"
          type="text"
          placeholder="Surname"
          autoComplete="off"
          onInput={e => {
            e.preventDefault();
            setSurname(e.target.value);
          }}
        ></input>
        <input
          required
          className="input"
          type="text"
          placeholder="Username"
          autoComplete="off"
          onInput={e => {
            e.preventDefault();
            setUsername(e.target.value);
          }}
        ></input>
        <input
          required
          className="input"
          type="password"
          pattern=".{8,}"
          title="Eight or more characters"
          placeholder="Password"
          autoComplete="off"
          onInput={e => {
            e.preventDefault();
            setPassword(e.target.value);
          }}
        ></input>
        <input
          required
          className="input"
          type="password"
          placeholder="Confirm password"
          autoComplete="off"
          onInput={e => {
            e.preventDefault();
            setSeconPassword(e.target.value);
          }}
        ></input>
        <input
          required
          className="input"
          type="email"
          placeholder="e-mail"
          autoComplete="off"
          onInput={e => {
            e.preventDefault();
            setEmail(e.target.value);
          }}
        ></input>
        <button
          className="button"
          type="button"
          onClick={e => {
            handleRegister();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
