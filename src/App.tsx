import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Alert from "./components/layout/Alert";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import User from "./components/users/User";
import AlertState from "./context/alert/AlertState";
import GithubState from "./context/github/GithubState";
import NotFound from "./components/pages/notFound";
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
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/about' component={About}></Route>
                <Route exact path='/user/:login' component={User}></Route>
                <Route component={NotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
