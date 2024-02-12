import noise from "./assets/images/noise.png";
import lines from "./assets/images/lines.png";
import "./App.css";
import Heading from "./assets/components/Heading";
import Todo from "./assets/components/Todo";
import Timer from "./assets/components/Timer";

const App = () => {
  return (
    <div
      className="app"
      style={{
        background: `url(${noise}),url(${lines}), linear-gradient(120deg, #211860 0%, #33277E 100%)`,
      }}
    >
      <div className="main">
        <Heading />
        <div className="second">
          <Todo />
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default App;
