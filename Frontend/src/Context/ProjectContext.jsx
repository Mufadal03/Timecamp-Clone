import { createContext, useState } from "react";

export const ProjectContext = createContext();

function ProjectcontextProvider({ children }) {
  const [edit, setEdit] = useState(false);
  const [addtask,setAddtask]=useState(false)
  return (
    <ProjectContext.Provider value={{ edit, setEdit,addtask,setAddtask }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectcontextProvider;
