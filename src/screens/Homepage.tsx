import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (pageName: string) => {
    navigate(pageName);
  };
  return (
    <div className="container-homepage">
      <h2 className="greeting">Welcome</h2>
      <span className="description"> How are you feeling today? </span>
      <div className="homepage-buttons">
        <button className="to-do-button" onClick={() => handleClick("/to-do")}>
          I'm Feeling Productive 📚
        </button>
        <button className="diary-button" onClick={() => handleClick("/diary")}>
          I'm Feeling Sentimental 🧸️
        </button>
      </div>
    </div>
  );
};

export default Homepage;
