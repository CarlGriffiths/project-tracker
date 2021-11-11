export default (state, action) => {
  switch (action.type) {
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter((o) => o.id !== action.payload),
        completedProjects: state.completedProjects.filter((o) => o.id !== action.payload),
      };
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    case "COMPLETED_PROJECT":
      return {
        ...state,
        projects: state.projects.filter((o) => o.id !== action.payload.id),
        completedProjects: [action.payload, ...state.completedProjects],
      };
    default:
      return state;
  }
};
