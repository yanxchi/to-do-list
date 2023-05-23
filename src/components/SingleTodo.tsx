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
import { AiFillDelete } from 'react-icons/ai';
import {BsCircle} from 'react-icons/bs'
import {FiCheckCircle} from 'react-icons/fi'
import "./styles.css";

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

    const handleSubmit = (e:React.FormEvent, id: number) => {
        if (editTodo.length<=3)
        {
            e.preventDefault();
            alert("To-do item must be more than 3 characters. Please try again.")
            seteditTodo(todo.todo);
            setEdit(false);
        }
        else
        {
            e.preventDefault();        
            setTodos(todos.map((todo)=> (
                todo.id===id?({...todo, todo:editTodo}):(todo
                ))));
                setEdit(false);
        }
    }
    const inputRef = useRef<HTMLInputElement>(null);
      
    useEffect(() => {
      inputRef.current?.focus();
    }, [edit])
    

    return(
        <form className="todos__single" onSubmit={(e) => handleSubmit(e, todo.id)}>
        <div className="todo-single-container">
          <div className="todos-container">
            {edit ? (
            <div>  
                <span className= "check-icon" onClick={() => handleDone(todo.id)}><BsCircle/></span>
                <input
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => seteditTodo(e.target.value)}
                    className="todos__single--text"
                />
            </div>
            ) : todo.isDone ? (
            <div>
                <s className= "check-icon" onClick={() => handleDone(todo.id)}><FiCheckCircle/></s>
                <s className="todos__single--text">{todo.todo}</s>
            </div>
            ) : (
            <div>
                <span className= "check-icon" onClick={() => handleDone(todo.id)}><BsCircle/></span>
                <span className="todos__single--text" onClick={() => { if (!edit && !todo.isDone) {setEdit(!edit);}}} >{todo.todo}</span>
            </div>
            )}
          </div>
          <div className="icon-container">
            <span className="icon delete-icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete size={16} />
            </span>
          </div>
        </div>
      </form>
  );
};

export default SingleTodo