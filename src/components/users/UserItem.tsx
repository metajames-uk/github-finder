import React from "react";

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
  return (
    <div className='card text-center'>
      <img
        src={props.userItem.avatar_url}
        alt='avatar'
        style={{ width: "60px" }}
      />
      <h3>{props.userItem.login}</h3>
      <a href={props.userItem.html_url} className='btn btn-dark btn-sm my-1'>
        More
      </a>
    </div>
  );
};

export default UserItem;
