import React, { useState } from "react";
import Modal from "./UI/Modal";
import Container from "./UI/Container";
import Panel from "./UI/Panel";
import UserForm from "./User/UserForm";
import UserList from "./User/UserList";
import Users from "./Data/Data";



function App() {
  const [users, setUsers] = useState(Users);
  const [message, setMessage] = useState("");

  const updateModal = (message) => setMessage(message);
  const addNewUser = (newUser) => {
    setUsers(
      (previousUsers) => {
        return [newUser, ...previousUsers];
      }
    );
  }

  return (
    <div>
      <Container>
        <Panel headerText="Create user">
          <UserForm updateModal={updateModal} addNewUser={addNewUser} />
        </Panel>
      </Container>
      <Container>
        <Panel headerText="User list">
          <UserList users={users} />
        </Panel>
      </Container>
      {message && <Modal updateModal={updateModal} message={message} />}
    </div>
  );
}

export default App;
