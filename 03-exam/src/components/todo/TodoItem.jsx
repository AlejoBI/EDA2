import React from "react";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ todo, onDeleteTodo }) => {
  return (
    <li className={styles.listItem}>
      <span className="align-self-center">{todo.description}</span>
      <button
        className={styles.btnDelete}
        onClick={() => onDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
