import "./App.css";

import Heading from "./assets/components/Heading";
import Todo from "./assets/components/Todo";
import Timer from "./assets/components/Timer";

const App = () => {
  return (
    <div className="app">
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
