import "./App.css";
import { useState } from "react";
import Heading from "./assets/components/Heading";
import Todo from "./assets/components/Todo";
import Timer from "./assets/components/Timer";

const App = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const newTask = { name: taskName, description: taskDescription };

  return (
    <div className="app">
      <div className="main">
        <Heading />
        <div className="second">
          <Todo
            newTask={newTask}
            taskDescription={taskDescription}
            taskName={taskName}
            setTaskDescription={setTaskDescription}
            setTaskName={setTaskName}
          />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default App;
