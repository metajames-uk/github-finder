import React from "react";

interface INavbar {
  title: string;
  icon: string;
}
const Navbar = (props: INavbar) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};

export default Navbar;
