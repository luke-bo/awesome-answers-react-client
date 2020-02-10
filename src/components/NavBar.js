import React from "react";
import { NavLink } from "react-router-dom";

import { Clock } from "./Clock";

export const NavBar = ({ currentUser, onSignOut, showTime }) => {
  const handleSignOutClick = event => {
    event.preventDefault();
    if (typeof onSignOut === "function") {
      onSignOut();
    }
  };
  return (
    <div className="ui secondary pointing menu">
      <NavLink exact to="/" className="item">
        Welcome
      </NavLink>
      <NavLink exact to="/questions" className="item">
        Questions
      </NavLink>
      <NavLink exact to="/questions/new" className="item">
        Ask
      </NavLink>
      <div className="right menu">
        {showTime && <Clock />}
        {!currentUser && (
          <>
            <NavLink exact to="/sign_in" className="ui black button">
              Sign In
            </NavLink>
            <NavLink exact to="/sign_up" className="ui black button">
              Sign Up
            </NavLink>
          </>
        )}
        {currentUser && (
          <>
            <div className="item">Hello {currentUser.full_name}</div>
            <button
              className="ui inverted red button"
              onClick={handleSignOutClick}
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};
