import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoardBar/BoardBar";

function App() {
  return (
    <div className="trello-master">
      <AppBar/>
      <BoardBar/>
      <div className="board-columns">
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"></img>
              Desing & Reaserch
            </li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Brainstorm</header>
          <ul>
            <li>
              <img src="https://raw.githubusercontent.com/haryphamdev/sharing-host-files/master/trello/img-design.png"></img>
              Desing & Reaserch
            </li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
            <li>second</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
