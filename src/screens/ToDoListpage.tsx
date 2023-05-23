import React, { useState } from "react";
import { Todo } from "../model";
import InputField from "../components/InputField";
import TodoList from "../components/TodoList";

const ToDoListpage: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  /* <string> is used to declare the type of useState params. */
  /* If you want to declare more than 1 data type, use the union operator | */
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); /*Prevents auto refresh everytime you press go */
    if (todo.length > 3) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    } else {
      setTodo("");
    }
  };
  return (
    <div>
      <h2 className="to-do-heading">To-Do List</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default ToDoListpage;
