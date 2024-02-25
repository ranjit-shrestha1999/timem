import "../styles/Todo.css";
import { useState } from "react";
import Modal from "./Todomodal";
import Empty from "./Empty";
import { MdDelete } from "react-icons/md";

interface SomeComponentProps {
  newTask: { name: string; description: string };
  tasks: string[];
  taskName: string;
  setTasks: (value: string) => void;
  setTaskName: (value: string) => void;
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  setOpenSnackbar: (value: boolean) => void;
}
interface SomeComponentProps2 {
  name: string;
  description: string;
}
const Todo: React.FC<SomeComponentProps> = ({
  newTask,
  taskName,
  setTaskName,
  taskDescription,
  setOpenSnackbar,
  setTaskDescription,
}) => {
  const [tasks, setTasks] = useState<SomeComponentProps2[]>([]);
  const shouldApplyAutoWidth = tasks.length > 7;
  const shouldApplyEmpty = tasks.length == 0;

  const deleteList = (index: number) => {
    const newTodo = tasks.filter((_, i: number) => i != index);
    setTasks(newTodo);
  };
  const containerClassName = shouldApplyAutoWidth
    ? "containerautoheight"
    : "container";
  return (
    <div className={containerClassName}>
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
          setTasks={setTasks}
          tasks={tasks}
          setOpenSnackbar={setOpenSnackbar}
        />
      </div>
      <div>
        <ul className="list">
          {shouldApplyEmpty ? <Empty /> : ""}
          {tasks.map((task: any, index: number) => (
            <li key={index} className="todolist">
              #{task.name.charAt(0).toUpperCase() + task.name.slice(1)} :{" "}
              {task.description.charAt(0).toUpperCase() +
                task.description.slice(1)}
              <div className="delete" onClick={() => deleteList(index)}>
                <MdDelete color="red" size={32} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
