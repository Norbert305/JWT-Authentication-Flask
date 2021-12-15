import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Welcome!</h1>
      <Link to="/SignUpPage">
        <button type="button" className="btn btn-primary m-4">
          Sign Up
        </button>
      </Link>
      <h4>Already a member?</h4>
      <Link to="/Login">
        <button type="button" className="btn btn-warning m-4">
          Login
        </button>
      </Link>
    </div>
  );
};
