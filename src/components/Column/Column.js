import "./Column.scss";
import Task from "../Task/Task";

const Column = () => {
  return (
    <>
      <div className="column">
        <header>Brainstorm</header>
        <ul className="task-list">
          <Task/>
          {/* <li>second</li>
          <li>second</li>
          <li>second</li>
          <li>second</li>
          <li>second</li>
          <li>second</li> */}
        </ul>
        <footer>Add another card</footer>
      </div>
    </>
  );
};

export default Column;
