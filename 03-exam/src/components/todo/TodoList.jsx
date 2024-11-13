import React from "react";
import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ todos = [], onDeleteTodo, onDoneTodo }) => {
  return (
    <ul className={styles.listGroup}>
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} onDeleteTodo={onDeleteTodo} onDoneTodo={onDoneTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
