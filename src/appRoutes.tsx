import{
  BrowserRouter as Router, Route
} from "react-router-dom";
import Body from "./body-of-front/Body";


const AppRoutes = () => {
  


return(
<>
<Router>
  
    
      <Route  path="/" element={<Body/>} />
      
    
  
</Router>
</>
)
}


export default AppRoutes;