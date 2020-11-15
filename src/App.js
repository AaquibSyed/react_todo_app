import React, { useState, useEffect,useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [dark,setDark] = useState(false)

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

  const switchLight = () =>{
    setDark(!dark)
    const body = document.getElementsByTagName('BODY')[0];
    const darkSwitch = document.getElementsByClassName('darkSwitch')[0]
    console.log(darkSwitch)
     body.classList.toggle('dark')
     darkSwitch.classList.toggle('dark-btn')
  }

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
        <div className='darkSwitchDiv'>
        <button className="darkSwitch" onClick={switchLight}>{dark?'Light':'Dark'} mode</button>
        </div>
      </div>
    </>
  );
}

export default App;
