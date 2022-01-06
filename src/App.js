import React, { useState } from "react";
import Modal from "./UI/Modal";
import Container from "./UI/Container";
import Panel from "./UI/Panel";
import UserForm from "./User/UserForm";
import UserList from "./User/UserList";
import Users from "./Data/Data";



function App() {
  const [users, setUsers] = useState(Users);
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Container>
        <Panel headerText="Create user">
          <UserForm />
        </Panel>
      </Container>
      <Container>
        <Panel headerText="User list">
          <UserList users={users} />
        </Panel>
      </Container>
      {showModal && <Modal />}
    </div>
  );
}

export default App;
