import React from "react";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ todo, onDeleteTodo, onDoneTodo }) => {
  const itemClass = todo.done ? styles.done : styles.notDone;
  return (
    <>
      <div className={styles.container}>
        <li className={styles.listItem}>
          <span className="align-self-center">{todo.description}</span>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onDoneTodo(todo.id)}
          />
        </li>
        <div className={`${itemClass}`}></div>
        <button
          className={styles.btnDelete}
          onClick={() => onDeleteTodo(todo.id)}
        >
          Borrar
        </button>
      </div>
    </>
  );
};
