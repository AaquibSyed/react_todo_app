import React from "react";
import Todo from "./Todo";

const TodoList = ({ filteredTodos, todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((filtered_todo) => {
          return (
            <Todo
              key={filtered_todo.id}
              filtered_todo={filtered_todo}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
