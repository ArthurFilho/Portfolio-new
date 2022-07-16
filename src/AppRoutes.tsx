
import Header from "./body-of-front/Header";
import { BrowserRouter as Router, Route, Navigate } from "react-router-dom";


export const AppRoutes = () => {
return(
  <Router>

  <Route  path="/" element={<h1>MAIN PAGE</h1>}/>
  <Route path="*"  element={ <Navigate to="/" />}/>
  </Router>

)
};



