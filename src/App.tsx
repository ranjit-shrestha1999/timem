import "./App.css";
import { useState } from "react";
import Heading from "./assets/components/Heading";
import Todo from "./assets/components/Todo";
import Timer from "./assets/components/Timer";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import dayjs from "dayjs";

// import Stopwatch from "./assets/components/Stopwatch";

const App = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startTime, setStartTime] = useState(dayjs());
  const [endTime, setEndTime] = useState(dayjs());
  const [duration, setDuration] = useState("");
  // 1 for running, 2 for pending , 3 for skipped, 4 for completed.

  const newTask = {
    name: taskName,
    description: taskDescription,
    status: 2,
    time1: startTime,
    time2: endTime,
    range: duration,
  };
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
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
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          startTime={startTime}
          endTime={endTime}
          setDuration={setDuration}
          duration={duration}
        />
        <Timer />

        {/* <Stopwatch /> */}
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
  );
};

export default App;
