import { useState } from "react";
import "../styles/Modal.css";

const Modal = ({ onClose }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  //   const [input3, setInput3] = useState("");
  //   const [input4, setInput4] = useState("");

  const handleSave = () => {
    // Handle save functionality here
    console.log("Inputs:", input1, input2);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Modal Title</h2>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Task heading"
        />
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Task detail"
        />
        {/* <input
          type="text"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
          placeholder="Input 3"
        />
        <input
          type="text"
          value={input4}
          onChange={(e) => setInput4(e.target.value)}
          placeholder="Input 4"
        /> */}
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
