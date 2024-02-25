import "../styles/Todo.css";
import { useState } from "react";
import Modal from "./Todomodal";
import Empty from "./Empty";
import { MdDelete } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

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
  const [cTasksIndex, setCTasksIndex] = useState<number[]>([]);
  const completeList = (index: number) => {
    setCTasksIndex([...cTasksIndex, index]);
    const updatedTasks = tasks.map((task: any, i: number) =>
      i === index ? { ...task, status: 2 } : task
    );

    // Update the tasks state with the new array
    setTasks(updatedTasks);
  };

  const deleteList = (index: number) => {
    const newTodo = tasks.filter((_, i: number) => i != index);
    setTasks(newTodo);
  };

  return (
    <div className={tasks.length > 7 ? "containerautoheight" : "container"}>
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
          {tasks.length == 0 ? <Empty /> : ""}
          {tasks.map((task: any, index: number) => (
            <li
              key={index}
              className={
                cTasksIndex.includes(index) ? "todolistcompleted" : " todolist"
              }
            >
              #{task.name.charAt(0).toUpperCase() + task.name.slice(1)} :{" "}
              {task.description.charAt(0).toUpperCase() +
                task.description.slice(1)}
              {cTasksIndex.includes(index) ? (
                ""
              ) : (
                <div className="delete-complete">
                  <div className="delete" onClick={() => deleteList(index)}>
                    <MdDelete color="red" size={32} />
                  </div>
                  <div className="delete" onClick={() => completeList(index)}>
                    <FaCircleCheck color="green" size={26} />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
