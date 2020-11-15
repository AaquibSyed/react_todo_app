import React from "react";

const Form = ({ setInputText, inputText, setTodos, todos, setStatus }) => {
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.ceil(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form className="formElement">
        <div className="form__input-btn">
         <input
          type="text"
          placeholder="Enter task here"
          value={inputText}
          onChange={inputTextHandler}
          className="todo-input"
         />
        <button
          className="todo-button"
          onClick={submitTodoHandler}
          type="submit"
        >         
          <i className="fas fa-plus-square"></i>
        </button>
        
        </div>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
