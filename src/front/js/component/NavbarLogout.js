import React from "react";
import { Link } from "react-router-dom";

export const NavbarLogout = () => {
  const mystyle = {
    listStyleType: "none",
  };

  return (
    <nav className="navbar navbar-light bg-light mx-2">
      <div className="container-fluid">
        <a className="navbar-brand">JWT Project</a>
        <form className="d-flex">
          <Link to="/">
            <button className="btn btn-danger">Logout</button>
          </Link>
        </form>
      </div>
    </nav>
  );
};
