import logo from "../images/Time_m.png";
import "../styles/Heading.css";
const Heading = () => {
  return (
    <div className="heading">
      <img src={logo} alt="logo" />
      <div className="para">
        <p>Your one and only task timing companion.</p>
        <p>Manage your task schedule easily.</p>
      </div>
    </div>
  );
};

export default Heading;
