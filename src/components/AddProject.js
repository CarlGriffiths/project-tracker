import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const DeleteProject = () => {
  const [text, setText] = useState("");
  const { addProject } = useContext(GlobalContext);

  const clickButton = (e) => {
    e.preventDefault();

    const newProjecy = {
      //random id number for testing purposes 
      id: Math.floor(Math.random() * 1000000),
      title: text,
      time: new Date()
    };
    setText('');
    addProject(newProjecy);
  };

  return (
    <div>
    <h1>Add a new project</h1>
    <form onSubmit={clickButton}>
      <input className="input"
        type="text"
        value={text}
        placeholder="Enter Project title"
        onChange={(e) => setText(e.target.value)}
      ></input>

      <button className="input-button">add project</button>
      </form>
    </div>
  );
};

export default DeleteProject;
