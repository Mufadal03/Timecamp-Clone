import { createContext, useState } from "react";
import axios from "../axios/axios";

export const ProjectContext = createContext();

function ProjectcontextProvider({ children }) {
  const [edit, setEdit] = useState(false);
  const [addtask,setAddtask]=useState(false)
  const [id,setId]=useState("")
  const [userId,setuserId]=useState("")
  const [tasklist, setTasklist] = useState([]);

  const gettasks = () => {
    axios
      .get("/projects", {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
         setTasklist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ProjectContext.Provider value={{ edit, setEdit,addtask,setAddtask,id,setId,userId,setuserId,tasklist,setTasklist,gettasks }}>
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectcontextProvider;
