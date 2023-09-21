import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoardBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.scss'

function App() {
  return (
    
      <div className="trello-master">
        
        <BoardBar/>
        <Routes>
          <Route path="/" exact Component={Login} />
          <Route path="/register" exact Component={Register} />
          <Route path="/board" Component={BoardContent} />
        </Routes>
      </div>
    
  );
}

export default App;
