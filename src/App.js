import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    // getLocalTodos();
    if (localStorage.getItem("localTodos") === null) {
      localStorage.setItem("localTodos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("localTodos"));
      setTodos(local);
    }
  }, []);
  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    // saveToLocalStorage();
    localStorage.setItem("localTodos", JSON.stringify(todos));
  }, [status, todos]);

  return (
    <>
      <div className="App">
        <header>TODO List</header>
        <Form
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
        />
        <TodoList
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </>
  );
}

export default App;
