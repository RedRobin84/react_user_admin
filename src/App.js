import React, { useState } from "react";
import Modal from "./UI/Modal";
import Container from "./UI/Container";
import Panel from "./UI/Panel";
import UserForm from "./User/UserForm";
import UserList from "./User/UserList";

function App() {
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
          <UserList />
        </Panel>
      </Container>
      {showModal && <Modal />}
    </div>
  );
}

export default App;
