import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo, key) => (
        <TodoItem key={key} todo={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};
