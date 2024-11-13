import React, { useState } from "react";
import styles from "./TodoAdd.module.css";

const TodoAdd = ({ onNewTodo }) => {
  const [description, setDescription] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false,
    };

    onNewTodo(newTodo);
    setDescription("");
  };

  return (
    <form onSubmit={onFormSubmit} className={styles.formContainer}>
      <input
        type="text"
        placeholder="Tarea"
        className={styles.formControl}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className={styles.btnAdd}>
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
