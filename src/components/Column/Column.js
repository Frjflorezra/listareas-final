import "./Column.scss";
import Card from "../Card/Card";

const Column = (props) => {
  const {column} = props;

  return (
    <>
      <div className="column">
        <header>{column.title}</header>
        <ul className="card-list">
          <Card/>
          <li className="card-item">second</li>
          <li className="card-item">second</li>
          <li className="card-item">second</li>
          <li className="card-item">second</li>
          <li className="card-item">second</li>
          <li className="card-item">second</li>
        </ul>
        <footer>Add another card</footer>
      </div>
    </>
  );
};

export default Column;
