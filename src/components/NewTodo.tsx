import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.scss";
import { TodosContext } from "../store/todos-context";
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value.trim();

    if (enteredText.length === 0) {
      // Throw an error or handle empty input
      return;
    }

    // Add todo
    todosCtx.addTodo(enteredText);
    todoTextInputRef.current!.value = ""; // Clear input field
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text">Todo:</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
