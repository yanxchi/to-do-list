import React, { useState } from "react";
import "./App.css";
import Homepage from "./screens/Homepage";
import { Routes, Route, Link } from "react-router-dom";
import ToDoListpage from "./screens/ToDoListpage";
import Diarypage from "./screens/Diarypage";
import CreateDiarypage from "./screens/CreateDiarypage";

const App: React.FC = () => {
  /* FC is functional component*/
  return (
    <div className="container">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item1">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item2">
            <Link to="/to-do" className="navbar__link">
              To Do
            </Link>
          </li>
          <li className="navbar__item3">
            <Link to="/diary" className="navbar__link">
              Diary
            </Link>
          </li>
        </ul>
      </nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/to-do" element={<ToDoListpage />} />
          <Route path="/diary" element={<Diarypage />} />
          <Route path="/create-diary" element={<CreateDiarypage/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
