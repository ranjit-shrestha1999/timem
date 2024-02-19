import { useState } from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import "../styles/Modal.css";

const Todomodal = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  // const handleSave = () => {
  //   // Handle save functionality here
  //   console.log("Inputs:", input1, input2);
  // };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <TextField
              id="outlined-basic"
              label="Task Heading"
              variant="outlined"
              value={input1}
              onChange={(e) => setInput1(e.target.value)}
              className="inputcontainer"
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Your Task Details"
              multiline
              maxRows={4}
              value={input2}
              onChange={(e) => setInput2(e.target.value)}
              className="inputcontainer"
            />
          </div>
          <div className="modalbuttoncontainer">
            <button className="dialogbutton1" onClick={handleClose}>
              CLOSE
            </button>
            <button className="dialogbutton2" onClick={handleClose} autoFocus>
              SAVE
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Todomodal;
