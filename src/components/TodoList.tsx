/*
1. rafce to get boilerplate
2. determine the type of your component
3. determine your parameters
4. determine the type of your parameters using interface
^ note: if you don't know the type of functions, go to the app file and hover over to copy the type after the colon. 
5. 
*/

import React from 'react';
import { Todo } from "../model";
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props>= ({todos,setTodos})=> {
  return (
    <div className = "todos">
        {
            todos.map(todo => (
                <ul>
                  <li className='todo-item'>
                    <SingleTodo 
                    todo = {todo} 
                    key = {todo.id}
                    todos= {todos}
                    setTodos = {setTodos}/>
                  </li>
                </ul>
                ))
        }
    </div>
  );
};

export default TodoList