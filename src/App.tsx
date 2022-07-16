import Body from "./body-of-front/Body";
import Header from "./body-of-front/Header";
import EndingPage from "./body-of-front/endingPage";
import { Widget } from "./components/Widget";
export function App(){

  return(
  <div> 
     <Header/>
    <Body/>
    <EndingPage/>
    <Widget/>
  </div>
  )
}
