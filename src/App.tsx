import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Spinner from "./components/layout/Spinner";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  searchUsers = async (text: string) => {
    this.setState({
      loading: true
    });
    const res = await fetch(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    let json = await res.json();
    this.setState({
      users: json.items,
      loading: false
    });
  };

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  setAlert = (msg: string, type: string) => {
    this.setState({
      alert: {
        msg,
        type
      }
    });
    setTimeout(() => {
      this.setState({
        alert: null
      });
    }, 5000);
  };

  render() {
    const { users, loading, alert } = this.state;
    return (
      <Router>
        <Fragment>
          <Navbar />
          {loading ? (
            <Spinner />
          ) : (
            <div className="container">
              {alert && <Alert alert={alert}></Alert>}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                      />
                      <Users loading={loading} users={users} />
                    </Fragment>
                  )}
                ></Route>
                <Route exact path="/about">
                  <About></About>
                </Route>
              </Switch>
            </div>
          )}
        </Fragment>
      </Router>
    );
  }
}

export default App;
