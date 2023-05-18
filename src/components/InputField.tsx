/*
1. rafce to get boilerplate
2. determine the type of your component
3. determine your parameters
4. determine the type of your parameters using interface
^ note: if you don't know the type of functions, go to the app file and hover over to copy the type after the colon. 
5. 
*/

import React, {useRef} from 'react' /* rafce to generate boiler plate code */ 
import './styles.css'

interface Props{
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  /* Copy the data type of setTodo by hovering over it in the app page. */
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
const inputRef = useRef<HTMLInputElement>(null) // useRef is like when we use document.element.className etc.  
  return(
    <form className = 'input' 
    onSubmit={(e) => 
    {
      handleAdd(e);
      inputRef.current?.blur();
    }}>
        <input type = 'input' 
        ref = {inputRef}
        value = {todo}
        onChange= {
          (e) => setTodo(e.target.value)}
        placeholder = "Enter a new task" 
        className = "input__box"></input>
        <button className = 'input__submit' type = "submit"> Add </button>
    </form>)
}

export default InputField;