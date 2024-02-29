import "../styles/Todo.css";
interface SomeComponentProps2 {
  name: string;
  description: string;
  status: number;
}
interface SomeProps {
  tasks: SomeComponentProps2[];
}
const Counter: React.FC<SomeProps> = ({ tasks }) => {
  return (
    <div className="counter">
      <li className="count">{tasks.length} Total</li>
      <div className="smallcircle"></div>
      <li className="count">
        {tasks.filter((task) => task.status === 4).length} Achieved
      </li>
      <div className="smallcircle"></div>
      <li className="count">
        {tasks.filter((task) => task.status === 2).length} Pending
      </li>
    </div>
  );
};

export default Counter;
