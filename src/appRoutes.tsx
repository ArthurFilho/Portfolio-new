import { BrowserRouter } from "react-router-dom";
import{
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import MainPage from "./mainPage"
import ProjectPage from "./projectPage"

const AppRoutes = () => {
  


return(
<>
<Router>
  
    
      <Route  path="/" element={<MainPage/>} />
      <Route  path="/projects" element={<ProjectPage/>}/>
    
  
</Router>
</>
)
}


export default AppRoutes;