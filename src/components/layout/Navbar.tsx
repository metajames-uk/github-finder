import React from "react";
import { Link } from "react-router-dom";

interface INavbar {
  title: string;
  icon: string;
}
const Navbar = (props: INavbar) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

export default Navbar;
