import React from "react";

const Todo = ({ filtered_todo, todos, setTodos }) => {
  const deleteHandler = (e) => {
    const parentEl = e.target.parentElement;
    parentEl.classList.add("fall");
    setTimeout(() => {
      setTodos(todos.filter((el) => el.id !== filtered_todo.id));
    }, 500);
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === filtered_todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li
        className={`todo-item ${filtered_todo.completed ? "completed" : ""}`}
        id={filtered_todo.id}
      >
        {filtered_todo.text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
