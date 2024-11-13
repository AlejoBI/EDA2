import React from "react";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className={styles.listGroup}>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
