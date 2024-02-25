import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import "../styles/Modal.css";

interface SomeProps {
  newTask: { name: string; description: string };
  taskName: string;
  setTaskName: (value: string) => void;
  taskDescription: string;
  setTaskDescription: (value: string) => void;
  tasks: string[];
  setTasks: (value: string) => void;
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
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
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
