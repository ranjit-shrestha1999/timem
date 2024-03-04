import "../styles/Todo.css";
import { useEffect, useState } from "react";
import Modal from "./Todomodal";
import Empty from "./Empty";
import { MdDelete } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";
import Counter from "./Counter";
import dayjs from "dayjs";

interface SomeComponentProps {
  newTask: {
    name: string;
    description: string;
    status: number;
    time1: dayjs.Dayjs;
    time2: dayjs.Dayjs;
    range: string;
  };
  setStartTime: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  setEndTime: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  startTime: dayjs.Dayjs;
  endTime: dayjs.Dayjs;
  taskName: string;
  duration: string;
  setTaskName: (value: string) => void;
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  setOpenSnackbar: (value: boolean) => void;
  setDuration: React.Dispatch<React.SetStateAction<string>>;
}
interface SomeComponentProps2 {
  name: string;
  description: string;
  status: number;
  time1: dayjs.Dayjs;
  time2: dayjs.Dayjs;
  range: string;
}

const Todo: React.FC<SomeComponentProps> = ({
  newTask,
  taskName,
  setTaskName,
  taskDescription,
  setOpenSnackbar,
  setTaskDescription,
  setStartTime,
  startTime,
  setEndTime,
  endTime,
  duration,
  setDuration,
}) => {
  const [tasks, setTasks] = useState<SomeComponentProps2[]>([]);
  const sortedTodos = tasks.slice().sort((a, b) => a.status - b.status);
  useEffect(() => {
    console.log(sortedTodos);
  }, [sortedTodos]);
  const completeList = (index: number) => {
    const updatedTasks = sortedTodos.map((task: any, i: number) =>
      i === index ? { ...task, status: 4 } : task
    );

    setTasks(updatedTasks);
  };

  const deleteList = (index: number) => {
    const newTodo = sortedTodos.filter((_, i: number) => i != index);
    setTasks(newTodo);
  };

  return (
    <div className={tasks.length > 6 ? "containerautoheight" : "container"}>
      <div className="head-main">
        <div className="warper">
          <h1>My task </h1>

          <Counter tasks={tasks} />
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
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          startTime={startTime}
          endTime={endTime}
          setDuration={setDuration}
        />
      </div>
      <div>
        <ul className="list">
          {tasks.length == 0 ? <Empty /> : ""}
          {sortedTodos.map((task: any, index: number) => (
            <li
              key={index}
              className={
                task.status === 1
                  ? "todolist"
                  : task.status === 2
                  ? "todolist"
                  : task.status === 3
                  ? "todolist"
                  : "todolistcompleted"
              }
            >
              #{task.name.charAt(0).toUpperCase() + task.name.slice(1)} :{" "}
              {task.description.charAt(0).toUpperCase() +
                task.description.slice(1)}
              {" - "}({task.time1.format("h:mm a")})
              {task.status === 1 ? (
                <div className="delete-complete">
                  <div className="delete" onClick={() => deleteList(index)}>
                    <MdDelete color="red" size={32} />
                  </div>
                  <div className="delete" onClick={() => completeList(index)}>
                    <FaCircleCheck color="green" size={26} />
                  </div>
                </div>
              ) : task.status === 2 ? (
                <div className="delete-complete">
                  <div className="delete" onClick={() => deleteList(index)}>
                    <MdDelete color="red" size={32} />
                  </div>
                  <div className="delete" onClick={() => completeList(index)}>
                    <FaCircleCheck color="green" size={26} />
                  </div>
                </div>
              ) : task.status === 3 ? (
                <div className="delete-complete">
                  <div className="delete" onClick={() => deleteList(index)}>
                    <MdDelete color="red" size={32} />
                  </div>
                  <div className="delete" onClick={() => completeList(index)}>
                    <FaCircleCheck color="green" size={26} />
                  </div>
                </div>
              ) : (
                <div className="completedcontainer">Achieved 🥳 </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
