import "../styles/Timer.css";
const Timer = () => {
  return (
    <div className="container1">
      <h1>Timer</h1>
      <div className="content">
        <div className="circle"></div>
        <div className="buttoncontainer">
          <button>FINISH</button>
          <button>PAUSE</button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
