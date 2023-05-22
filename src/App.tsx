import React, {useState} from 'react';
import './App.css';
import Homepage from './screens/Homepage';
import {Routes, Route, Link} from 'react-router-dom';
import ToDoListpage from './screens/ToDoListpage';

const App:React.FC = () => { /* FC is functional component*/ 
  return (
    <div className="App">
      <nav className="nav">
        <Link to ="/" className = "nav-item">Home</Link>
        <Link to ="/to-do" className = "nav-item">To do</Link>
      </nav>
      <Routes>
        <Route path = "/" element = {<Homepage/>} />
        <Route path = "/to-do" element = {<ToDoListpage/>}/>
      </Routes>
    </div>
  );
};

export default App;