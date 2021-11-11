import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  projects: [
    { id: 1, title: "Learn context api", time: new Date()},
    { id: 2, title: "Create a portfolio" , time: new Date()}
  ],

  completedProjects: [],
};

//create context
export const GlobalContext = createContext(initialState);



//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const deleteProject = (id) => {
      dispatch({
          type: 'DELETE_PROJECT',
          payload: id
      })
  }

  const addProject = (project) => {
    dispatch({
        type: 'ADD_PROJECT',
        payload: project
    })
}

const completedProject = (project) => {
    dispatch({
        type: 'COMPLETED_PROJECT',
        payload: project
    })
}  

  return (
    <GlobalContext.Provider
      value={{
        projects: state.projects,
        completedProjects: state.completedProjects,
        deleteProject: deleteProject,
        addProject: addProject,
        completedProject: completedProject
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
