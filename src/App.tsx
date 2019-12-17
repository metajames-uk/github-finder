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

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ msg: "", type: "" });

  const searchUsers = async (text: string) => {
    setLoading(true);
    const res = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    let json = await res.json();
    setUsers(json.items);
    setLoading(false);
  };

  const getUser = async (username: string) => {
    const res = await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    let json = await res.json();
    setUser(json);
  };

  const getUserRepos = async (username: string) => {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    let json = await res.json();
    setRepos(json);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const setAlertMessage = (msg: string, type: string) => {
    setAlert({
      msg: msg,
      type: type
    });
    setTimeout(() => {
      setAlert({ msg: "", type: "" });
    }, 5000);
  };

  return (
    <Router>
      <Fragment>
        <Navbar />
        {loading ? (
          <Spinner />
        ) : (
          <div className='container'>
            {alert.msg !== "" && <Alert alert={alert}></Alert>}
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={setAlertMessage}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              ></Route>
              <Route exact path='/about'>
                <About></About>
              </Route>
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    loading={loading}
                    repos={repos}
                  />
                )}
              ></Route>
            </Switch>
          </div>
        )}
      </Fragment>
    </Router>
  );
};

export default App;
