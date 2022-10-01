import "./App.css";
import Addprojects from "./Pages/Project/Addprojects";
import MainRoutes from "./Routes/MainRoutes";
import ProjectcontextProvider from "./Context/ProjectContext";
import './App.css';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <MainRoutes />
      <ProjectcontextProvider>
        <Addprojects />
      </ProjectcontextProvider>
    </div>
  );
}

export default App;
