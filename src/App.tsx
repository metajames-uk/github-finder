import React, { Component, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Spinner from "./components/layout/Spinner";
import Search from "./components/users/Search";

class App extends Component {
  state = {
    users: [],
    loading: false
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

  render() {
    return (
      <Fragment>
        <Navbar />
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div className='container'>
            <Search searchUsers={this.searchUsers} />
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        )}
      </Fragment>
    );
  }
}

export default App;
