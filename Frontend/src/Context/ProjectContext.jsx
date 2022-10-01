import { createContext, useState } from "react";

export const ProjectContext = createContext();

function ProjectcontextProvider({ children }) {
  const [edit, setEdit] = useState(true);
  return (
    <ProjectContext.Provider value={{ edit, setEdit }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectcontextProvider;
