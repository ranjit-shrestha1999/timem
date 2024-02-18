import "../styles/Todo.css";
import { useState } from "react";
import Modal from "./modal";
const Todo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <div className="container">
      <div className="head-main">
        <div className="warper">
          <h1>My task</h1>
          <p>2 pending, 1 completed</p>
        </div>
        <button onClick={openModal}>ADD TASK</button>
        {modalVisible && <Modal onClose={closeModal} />}
      </div>
    </div>
  );
};
export default Todo;
