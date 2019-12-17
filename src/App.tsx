import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import Spinner from "./components/layout/Spinner";
import About from "./components/pages/About";
import Search from "./components/users/Search";
import User from "./components/users/User";
import Users from "./components/users/Users";
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
const App = () => {

  return (
    <GithubState>
      <AlertState>
    <Router>
      <Fragment>
        <Navbar />
          <div className='container'>
            <Alert></Alert>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              ></Route>
              <Route exact path='/about'>
                <About></About>
              </Route>
              <Route
                exact
                path='/user/:login'
                component={User}
              ></Route>
            </Switch>
          </div>
      </Fragment>
    </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
