import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import Navigation from "./components/Navigation";
import CompletedProjects from "./components/CompletedProjects";
function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <Navigation />

          <div className="container">
            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="/add" element={<AddProject />} />
              <Route path="/completed-projects" element={<CompletedProjects />} />
            </Routes>
          </div>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
