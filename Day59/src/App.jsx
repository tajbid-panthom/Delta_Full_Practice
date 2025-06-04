import React from "react";
import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
const App = () => {
  return (
    <div>
      <Lottery n={3} />
    </div>
  );
};

export default App;
