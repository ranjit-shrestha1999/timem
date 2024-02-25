import "../styles/Timer.css";
import Circle from "../images/timer.png";
const Timer = () => {
  return (
    <div className="container1">
      <h1>Timer</h1>
      <div className="content">
        <div className="circle">
          <img src={Circle} alt="circle" />
        </div>
        <div className="buttoncontainer">
          <button>FINISH</button>
          <button>PAUSE</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
