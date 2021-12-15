import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const ClientHomePage = () => {
  const { actions, store } = useContext(Context);

  return (
    <div className="text-center">
      <h1 className="container mx-auto m-5 text-center">
        Welcome Back {store.loggedUser.full_name}
      </h1>
      <div>
        <img
          src="https://impact100.org/wp-content/uploads/2019/12/New-Member-Welcome.jpg"
          className="img-fluid w-50"
        />
      </div>
    </div>
  );
};
