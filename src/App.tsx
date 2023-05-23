import React, {useState} from 'react';
import './App.css';
import Homepage from './screens/Homepage';
import {Routes, Route, Link} from 'react-router-dom';
import ToDoListpage from './screens/ToDoListpage';

const App:React.FC = () => { /* FC is functional component*/ 
  return (
    
    <div className="container">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item1">
            <Link to="/" className="navbar__link1">Home</Link>
          </li>
          <li className="navbar__item2">
            <Link to="/to-do" className="navbar__link2">To Do</Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <h2 className='heading'>To-Do List</h2>
        <Routes>
          <Route path = "/" element = {<Homepage/>} />
          <Route path = "/to-do" element = {<ToDoListpage/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;