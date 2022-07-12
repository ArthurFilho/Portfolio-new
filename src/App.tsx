import { Widget } from "./components/Widget";
import Header from "./body-of-front/Header"
import Body from "./body-of-front/Body";
import EndingPage from "./body-of-front/endingPage";


export function App(){

  return(<div> 
    <Header/>
    <Body/>
    <EndingPage/>
    <Widget/>
  </div>)
}
