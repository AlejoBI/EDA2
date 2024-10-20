import React, { useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { TodoReducer } from "../hooks/TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Hacer los Challenges",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] ADD TODO",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: "[TODO] DELETE TODO",
      payload: todoId,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp: {todos.length},{" "}
        <small>Pendientes: {todos.filter((todo) => !todo.done).length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>
      </div>
    </>
  );
};
