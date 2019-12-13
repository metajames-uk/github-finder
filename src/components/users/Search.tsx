import React, { ChangeEvent, FormEvent, useState } from "react";
interface SearchProps {
  searchUsers(text: string): void;
  clearUsers(): void;
  showClear: boolean;
  setAlert(msg: string, type: string): any;
}

const Search = (props: SearchProps) => {
  const [text, setText] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === "") {
      props.setAlert("Please enter something", "light");
    } else {
      props.searchUsers(text);
      setText('');
    }
  };

    return (
      <div>
        <form onSubmit={onSubmit} className="form">
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search users"
            onChange={onChange}
          ></input>
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          ></input>
        </form>
        {props.showClear && (
          <button className="btn btn-light btn-block" onClick={props.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
}

export default Search;
