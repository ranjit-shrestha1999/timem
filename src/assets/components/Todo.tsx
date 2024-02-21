import "../styles/Todo.css";
// import { useState } from "react";
import Modal from "./Todomodal";
interface SomeComponentProps {
  newTask: { name: string; description: string };
  taskName: string;

  setTaskName: (value: string) => void;
  taskDescription: string;
  setTaskDescription: (value: string) => void;
}
const Todo: React.FC<SomeComponentProps> = ({
  newTask,
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
}) => {
  // const [tasks, setTasks] = useState([]);
  return (
    <div className="container">
      <div className="head-main">
        <div className="warper">
          <h1>My task</h1>
          <p>2 pending, 1 completed</p>
        </div>
        <Modal
          newTask={newTask}
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
          taskName={taskName}
          setTaskName={setTaskName}
        />
      </div>
      <div>{newTask.name}</div>
    </div>
  );
};
export default Todo;
