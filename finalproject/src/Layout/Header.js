import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Header.css";
import { isLogin, deleteToken } from "../Services/Auth.service/CoetusAuth";
import CountrySelector from "./PublicRoutes/components/MainComponents/CountrySelector";
import CategorySelector from "./PublicRoutes/components/MainComponents/CategorySelector";

const Header = props => {
  const { onStateChange, onCountChange, onCatChange } = props;
  const [input, setInput] = useState("");

  let history = useHistory();

  const handleClick = el => {
    history.push(`/${el}`);
  };

  const handleInput = e => {
    e.preventDefault();
    onStateChange(input);
    history.push("/searchednews");
  };

  return (
    <div className="header-container">
      <div className="header-log-search">
        <div className="header-left">
          <Link className="link-header" to="/">
            <img
              className="logo"
              src={"./logonews.png"}
              alt={"L33T NEWS"}
            ></img>
          </Link>
        </div>
        <div className="header-button">
          {isLogin() ? (
            <div>
              <button
                className="header-button1"
                onClick={() => {
                  if (window.confirm("Are you sure?") === true) {
                    deleteToken();
                    window.location.reload();
                  }
                }}
              >
                Log out!
              </button>
              <button
                className="header-button1 header-button2"
                onClick={() => history.push("/profile")}
              >
                My profile!
              </button>
            </div>
          ) : (
            <button
              className="header-button1"
              type="button"
              onClick={() => handleClick("login")}
            >
              Log In!
            </button>
          )}
        </div>
      </div>
      <div>
        <form onSubmit={e => handleInput(e)}>
          <input
            className="header-input"
            type="text"
            onInput={e => setInput(e.target.value)}
            placeholder="Enter search query"
          ></input>
        </form>
        <CountrySelector
          handleChange={e => {
            onCountChange(e.target.value);
          }}
        />
        <CategorySelector
          handleChange={e => {
            onCatChange(e.target.value);
            history.push("/");
          }}
        />
        <div className="nav-btns">
          <button
            className="nav-btn"
            id="blue"
            onClick={() => handleClick("covid19")}
          >
            COVID-19
          </button>
          <button className="nav-btn" onClick={() => handleClick("business")}>
            Business
          </button>
          <button
            className="nav-btn"
            onClick={() => handleClick("entertainment")}
          >
            Entertainement
          </button>
          <button className="nav-btn" onClick={() => handleClick("health")}>
            Health
          </button>
          <button className="nav-btn" onClick={() => handleClick("science")}>
            Science
          </button>
          <button className="nav-btn" onClick={() => handleClick("technology")}>
            Technology
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
