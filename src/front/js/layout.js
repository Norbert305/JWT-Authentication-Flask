import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { NavbarLogout } from "./component/NavbarLogout";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SignUpPage } from "./pages/SignUpPage";
import { Login } from "./pages/Login";

import { ClientHomePage } from "./pages/ClientHomePage";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/NavbarLogout">
              <NavbarLogout />
            </Route>
            <Route exact path="/">
              <Navbar />
              <Home />
            </Route>
            <Route exact path="/SignUpPage">
              <Navbar />
              <SignUpPage />
            </Route>
            <Route exact path="/ClientHomePage">
              <NavbarLogout />
              <ClientHomePage />
            </Route>
            <Route exact path="/Login">
              <Navbar />
              <Login />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
