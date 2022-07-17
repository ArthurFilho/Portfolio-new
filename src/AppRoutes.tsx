import{BrowserRouter as Router,Route,Routes}from"react-router-dom";
import Mainpage from "./MainPage"
import Projectpage from "./Projectspage"

export const AppRoutes=()=>{
  return(
    <>
 <Router>
    <Routes>
      <Route path="/"element={<Mainpage/>}/>
      <Route path="/project"element={<Projectpage/>}/>
    </Routes>
 </Router>
 </>
  )
};