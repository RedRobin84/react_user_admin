import React from "react";
import classes from "./UserList.module.css";
import UserRecord from "./UserRecord";

const UserList = (props) => {
  let content = "No users found.";

  if (props.users) {
    content = props.users.map((user) =>
      <UserRecord name={user.name} age={user.age} />
    );
  }
  return <div>{content}</div>;
};

export default UserList;
