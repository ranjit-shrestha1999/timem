import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import "../styles/Modal.css";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import * as React from "react";
import { duration } from "@mui/material";

interface SomeComponentProps2 {
  name: string;
  description: string;
  status: number;
  time1: dayjs.Dayjs;
  time2: dayjs.Dayjs;
  range: number;
}

interface SomeProps {
  newTask: {
    name: string;
    description: string;
    status: number;
    time1: dayjs.Dayjs;
    time2: dayjs.Dayjs;
    range: number;
  };
  taskName: string;
  setTaskName: (value: string) => void;
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  tasks: SomeComponentProps2[];
  setStartTime: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  setEndTime: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>;
  startTime: dayjs.Dayjs;
  endTime: dayjs.Dayjs;

  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setTasks: React.Dispatch<React.SetStateAction<SomeComponentProps2[]>>;
  setOpenSnackbar: (value: boolean) => void;
}

const Todomodal: React.FC<SomeProps> = ({
  newTask,
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
  tasks,
  setTasks,
  setOpenSnackbar,
  setStartTime,
  startTime,
  setEndTime,
  endTime,

  setDuration,
}) => {
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (!taskName.trim() || !taskDescription.trim()) {
      setError(true);
    } else {
      setTasks([...tasks, newTask]);
      setOpen(false);
      setTaskName("");
      setTaskDescription("");
      setError(false);
      setOpenSnackbar(true);

      const differenceMs = endTime.diff(startTime);
      setDuration(Math.floor(differenceMs / 1000));
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setStartTime(dayjs());
    setEndTime(dayjs());
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <>
      <button className="todobutton" onClick={handleClickOpen}>
        ADD TASK
      </button>
      <Dialog open={open} onClose={handleClose}>
        <div className="dialogcontainer">
          <h1 className="titleheading">Add Your Task</h1>

          <div className="modalinputcontainer">
            {error ? (
              <div className="error">*Note : Please fill all the data</div>
            ) : null}

            <TextField
              id="outlined-basic"
              label="Task Heading"
              variant="outlined"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="inputcontainer"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Your Task Details"
              multiline
              maxRows={4}
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="inputcontainer"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker", "TimePicker"]}>
                <TimePicker
                  label="Task start from"
                  value={startTime}
                  onChange={(newValue) =>
                    setStartTime(
                      newValue instanceof dayjs ? newValue : dayjs(newValue)
                    )
                  }
                  className="timecontainer"
                />
                <TimePicker
                  label="Task end at"
                  value={endTime}
                  onChange={(newValue) =>
                    setEndTime(
                      newValue instanceof dayjs ? newValue : dayjs(newValue)
                    )
                  }
                  className="timecontainer"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="modalbuttoncontainer">
            <button className="dialogbutton1" onClick={handleClose}>
              CLOSE
            </button>
            <button
              className="dialogbutton2"
              onClick={() => {
                handleSave();
              }}
            >
              SAVE
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Todomodal;
