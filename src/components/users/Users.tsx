import React from "react";
import UserItem from "./UserItem";
import Spinner from "../../components/layout/Spinner";

interface usersApi {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface UsersProps {
  users: usersApi[];
  loading: boolean;
}

const Users = (props: UsersProps) => {
  if (props.loading) {
    return <Spinner />;
  }
  return (
    <div style={userStyle}>
      {props.users.map((user, index) => {
        return <UserItem key={index} userItem={user} />;
      })}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Users;
