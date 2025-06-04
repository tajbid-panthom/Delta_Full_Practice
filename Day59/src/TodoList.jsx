import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoList = () => {
  const [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };
  let updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };
  let handleDeleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };
  const handleLowerCase = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: todo.task.toLowerCase() };
        }
        return todo;
      })
    );
  };
  const handleMarkAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <h2>Todo List Activity</h2>
      <input
        type="text"
        placeholder="Enter something"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button style={{ marginLeft: "10px" }} onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            style={todo.isDone ? { textDecoration: "line-through" } : {}}
            key={todo.id}
          >
            <span>{todo.task}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
            <button onClick={() => handleLowerCase(todo.id)}>
              Lower Case One
            </button>
            <button onClick={() => handleMarkAsDone(todo.id)}>
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>UpperCaseAll</button>
    </div>
  );
};

export default TodoList;
