import React, {useState} from "react";
import classes from "./UserForm.module.css";
import Box from "../UI/Box";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(undefined);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const validate = (name, age) => {
    if (name === "" || age === "") {
      return "Please fill up all fields.";
    }
    if (age < 1) {
      return "Please enter valid age.";
    }
    return null;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let message = validate(name, age)
    if (message) {
      props.updateModal(message);
      return;
    }

    const newUser = {
      name: name,
      age: age
    };

    props.addNewUser(newUser);
    setName("");
    setAge("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["user-form"]}>
        <Box>
          <div>
            <label htmlFor="nameInput">Name: </label>
          </div>
          <div>
            <input required={false} type="text" value={name} onChange={nameChangeHandler} id="nameInput"></input>
          </div>
        </Box>
        <Box>
          <div>
            <label htmlFor="ageInput">Age: </label>
          </div>
          <div>
            <input required={false} type="number" value={age} onChange={ageChangeHandler} id="ageInput"></input>
          </div>
        </Box>
        <Box>
          <button type="submit">Add user</button>
        </Box>
      </div>
    </form>
  );
};

export default UserForm;
