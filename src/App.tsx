import { Widget } from "./components/Widget";

export function App(){
  return(
      <div className="w-full flex"> 
       <div className="flex items-center justify-between">
                  
                  <div>
                      Arthur Filho
                  </div>

                  <div className="flex gap-8">
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
        
        <div>
        <div className="languages">
        </div>
        </div>

        <Widget />
      </div>
  )
}
