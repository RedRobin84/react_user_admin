import React from "react";
import classes from "./UserForm.module.css";
import Box from "../UI/Box";

const UserForm = () => {
  return (
    <div className={classes["user-form"]}>
      <Box>
        <div>
          <label htmlFor="nameInput">Name: </label>
        </div>
        <div>
          <input id="nameInput"></input>
        </div>
      </Box>
      <Box>
        <div>
          <label htmlFor="ageInput">Age: </label>
        </div>
        <div>
          <input id="ageInput"></input>
        </div>
      </Box>
      <Box>
          <button type="submit">Add user</button>
      </Box>
    </div>
  );
};

export default UserForm;
