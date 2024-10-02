import { useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    desc: "Learn React",
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  return (
    <>
      <h1>Todo App</h1>
      <hr />
    </>
  );
};

export default TodoApp;
