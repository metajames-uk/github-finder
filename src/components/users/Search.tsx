import React, { ChangeEvent, Component, FormEvent } from "react";
interface SearchProps {
  searchUsers(text: string): void;
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
    this.props.searchUsers(this.state.text);
    this.setState({
      text: ""
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            placeholder='Search users'
            onChange={this.onChange}
          ></input>
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          ></input>
        </form>
      </div>
    );
  }
}

export default Search;
