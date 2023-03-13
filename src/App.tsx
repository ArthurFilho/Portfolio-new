import { Widget } from "./components/Widget";

export function App(){
  return(
      <> 
       <div>
            <div>
                <h1>
                    Arthur Filho
                </h1> 
            
                <div> 
              
                  <div>       
                    Home 
                  </div>
                  <div>
                    Projects
                  </div>
                  <div>
                    <a href="mailto:peraarthur2018@hotmail.com"> Contact</a>   
                  </div>
                
                </div>
            
            </div>
            
        </div>
        <div>
        <div className="languages">
        </div>
        </div>

        <Widget />
      </>
  )
}
