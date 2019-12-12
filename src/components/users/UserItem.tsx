import React from "react";
import { Link } from "react-router-dom";

interface UserItemInterface {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface UserItemProps {
  userItem: UserItemInterface;
  key: number;
}

interface UserItemState {}

const UserItem = (props: UserItemProps) => {
  const { login } = props.userItem;
  return (
    <div className="card text-center">
      <img
        src={props.userItem.avatar_url}
        alt="avatar"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
        More
      </Link>
    </div>
  );
};

export default UserItem;
