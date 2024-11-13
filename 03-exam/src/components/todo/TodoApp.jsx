import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, todoDone } from "../../slices/todoSlice";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import styles from "./TodoApp.module.css";

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleNewTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleTodoDone = (todoId) => {
    dispatch(todoDone(todoId));
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.appTitle}>
          TodoApp: {todos.length},{" "}
          <small>Pendientes: {todos.filter((todo) => !todo.done).length}</small>
        </h1>

        <hr />
        <br />

        <div className={styles.row}>
          <div className={styles.col}>
            <TodoAdd onNewTodo={handleNewTodo} />
          </div>
          <div className={styles.col}>
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onDoneTodo={handleTodoDone} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
