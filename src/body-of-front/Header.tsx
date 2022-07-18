import "../global.css"


 function Header(){
    return(
        <div>
            <div className=" title flex text-2xl  color: rgb(255 255 255) w-auto h-28 left-36 top-4 ">
                <h1 className="logo">
                    Arthur Filho
                </h1> 
            
                <div className="flex"> 
                
                <div className="headerx home">       
                 Home 
                </div>
                <div className="headerx">
                 Projects
                </div>
                <div className="headerx">
                <a href="mailto:peraarthur2018@hotmail.com"> Contact</a>   
                </div>
                
                </div>
            
            </div>
            
        </div>

    )
    
    
    }




    export default Header;