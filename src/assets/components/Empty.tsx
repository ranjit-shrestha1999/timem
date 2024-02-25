import "../styles/Empty.css";
import illus from "../images/folder.png";
const Empty = () => {
  return (
    <div className="emptyview">
      <img className="emptyimage" src={illus} alt="" />
      <p className="text">
        <pre>No tasks added yet.</pre> Time to start filling up your to-do list!
      </p>
    </div>
  );
};

export default Empty;
