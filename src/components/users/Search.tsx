import React, { ChangeEvent, Component, FormEvent } from "react";
interface SearchProps {
  searchUsers(text: string): void;
  clearUsers(): void;
  showClear: boolean;
  setAlert(msg: string, type: string): any;
}

export class Search extends Component<SearchProps> {
  state = {
    text: ""
  };
  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: ""
      });
    }
  };
  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search users"
            onChange={this.onChange}
          ></input>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          ></input>
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
