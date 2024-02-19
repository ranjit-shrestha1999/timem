import "../styles/Todo.css";

import Modal from "./Todomodal";
const Todo = () => {
  return (
    <div className="container">
      <div className="head-main">
        <div className="warper">
          <h1>My task</h1>
          <p>2 pending, 1 completed</p>
        </div>

        <Modal />
      </div>
    </div>
  );
};
export default Todo;
