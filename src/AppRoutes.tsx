import{BrowserRouter as Router,Route,Routes}from"react-router-dom";
import { MainPage } from "./MainPage"
import { ProjectsPage } from "./Projectspage"

export const AppRoutes=()=>{
  return(
    <>
 <Router>
    <Routes>
      <Route path="/"element={<MainPage/>}/>
      <Route path="/project"element={<ProjectsPage/>}/>
    </Routes>
 </Router>
 </>
  )
};