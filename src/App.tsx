import "./App.css";
import { useState } from "react";
import Heading from "./assets/components/Heading";
import Todo from "./assets/components/Todo";
import Timer from "./assets/components/Timer";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const App = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const newTask = { name: taskName, description: taskDescription };
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

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
            setOpenSnackbar={setOpenSnackbar}
          />
          <Timer />
        </div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Your task has been successfully added !
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default App;
