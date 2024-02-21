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
}

const Todomodal: React.FC<SomeProps> = ({
  newTask,
  taskName,
  setTaskName,
  taskDescription,
  setTaskDescription,
}) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(false);
  const handleSave = (e: Event) => {
    e.preventDefault();
    if (!taskName.trim() || !taskDescription.trim()) {
      setError(true);
    } else {
      setTasks([...tasks, newTask]);
      setTaskName("");
      setTaskDescription("");
      setError(false);
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
          <form>
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
              <button className="dialogbutton2" onClick={handleSave}>
                SAVE
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default Todomodal;
