import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from "./model";
import TodoList from './components/TodoList';

const App:React.FC = () => { /* FC is functional component*/ 
  const [todo , setTodo] = useState<string>(""); 
  /* <string> is used to declare the type of useState params. */
  /* If you want to declare more than 1 data type, use the union operator | */
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); /*Prevents auto refresh everytime you press go */
    if(todo.length > 3){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("");
    }
    else{
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">To-do</span> 
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
      <TodoList todos = {todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;