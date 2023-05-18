/*
1. rafce to get boilerplate
2. determine the type of your component
3. determine your parameters
4. determine the type of your parameters using interface
^ note: if you don't know the type of functions, 
go to the app file and hover over to copy the type 
after the colon.
*/

/*
-- If you need to import things into the file, CTRL + SPACE. 
-- Props are properties. Properties provides information or
configuration to a component. 
When defining props, we can use interface OR types. 
-- interface can be extended. multiple interfaces can be 
merged together using declaration merging (same name merge
together).
-- type cannot be extended. 
-- 
*/

import React, {useEffect, useRef, useState} from 'react';
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import "./styles.css";
import TodoList from './TodoList';

type Props = { // In interface, don't need equal sign but in type we need! 
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const SingleTodo = ({todo, todos, setTodos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false); // this keep tracks if the edit mode is on or not
    const [editTodo, seteditTodo] = useState<string>(todo.todo); // this keeps the value of the edited to-do
    // the default value of the input box when you want to edit will not be empty. It will be todo.todo. 
    const handleDone = (id: number) => {
        /* We are mapping through the todos array and 
        whichever id matches the id in the parameter, 
        we are going to make the isDone property 
        from false to true and vice versa. */ 
        setTodos(todos.map((todo)=> todo.id === id?{...todo, isDone:!todo.isDone}:todo))
    }
    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo)=> todo.id!==id));
    };

    const handleEdit = (e: React.FormEvent, id: number)=>{
        e.preventDefault();        
        setTodos(todos.map((todo)=> (
            todo.id===id?({...todo, todo:editTodo}):(todo
            ))));
            setEdit(false);
    };
    const inputRef = useRef<HTMLInputElement>(null);
      
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit])
    

    return(
  <form className= "todos__single" onSubmit={(e)=> handleEdit(e, todo.id)}>
      {
          edit? (
            <input 
            ref = {inputRef}
            value = {editTodo} 
            onChange={(e)=> seteditTodo(e.target.value)} 
            className='todos__single--text'/>
          ):
          todo.isDone?(
              <s className='todos__single--text'>{todo.todo}</s>
          ):
          (<span className='todos__single--text'>{todo.todo}</span>)
      }
      <div>
          <span className="icon" onClick={() => {
              if(!edit && !todo.isDone)
              {
                setEdit(!edit);
              }
          }}
          >
              <AiFillEdit />
          </span>
          
          <span className="icon"  onClick = {() => handleDelete(todo.id)}>
              <AiFillDelete />
          </span>
          
          <span className="icon" onClick = {() => handleDone(todo.id)}>
              <MdDone />
          </span>
      </div>
  </form>
  );
};

export default SingleTodo