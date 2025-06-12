import React from "react";
import "./App.css";
import LudoBoard from "./LudoBoard";
import TodoList from "./TodoList";
import Lottery from "./Lottery";
import Form from "./Form";
import CommentsForm from "./CommentsForm";
import Counter from "./Counter";
import Joker from "./Joker";
const App = () => {
  return (
    <div>
      {/* <Lottery n={3} /> */}
      {/* <CommentsForm /> */}
      {/* <Counter /> */}
      <Joker />
    </div>
  );
};

export default App;
